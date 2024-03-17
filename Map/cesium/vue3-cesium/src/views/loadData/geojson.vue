<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import turf from 'turf'
import axios from 'axios'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'

let geoData, viewer

function toDel() {
    // 方式一：移除单条数据
    // viewer.dataSources.remove(geoData)

    // 方式二：移除所有
    viewer.dataSources.removeAll()
}

onMounted(() => {
    viewer = inject('$viewer')

    // 使用turf生成geojson数据
    // const linestring = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]]);       // 单条线数据
    // const multiLine = turf.multiLineString([[[0,0],[4,4]],[[7,7],[10,10]]])                 // 多条线的geojson数据
    // const polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-5, 52]]]);                // 面数据

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 加载geojson数据（方式一）：添加到实体中，通过entities.values获取
    // axios.get('/src/assets/data/geojson/region.json').then(result => {
    //     let promise = Cesium.GeoJsonDataSource.load(result.data)
    //     promise.then((res)=>{
    //       const entity = res.entities.values[0]
    //       viewer.entities.add(entity)
    //       viewer.zoomTo(entity)
    //     })
    // })


    // -----------------------------------------------------------------------------------------------------------------------------------

    // 加载geojson数据（方式二）：cesium的dataSources支持直接添加geojson数据(直接将实体放在dataSource中，与entity无关)
    axios.get('/src/assets/data/geojson/camera.json').then(result => {
        let promise = Cesium.GeoJsonDataSource.load(result.data)
        promise.then(res => {
            geoData = res
            viewer.dataSources.add(res)
        })
    })

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 加载geojson数据（方式三）：cesium的dataSources支持直接添加promise
    // axios.get('/src/assets/data/geojson/中华人民共和国.json').then(result => {
    //     let promise = Cesium.GeoJsonDataSource.load(result.data)
    //     viewer.dataSources.add(promise)
    //     viewer.zoomTo(promise)
    // })
})
</script>

<template>
    <home />

    <button @click="toDel()">删除</button>
</template>

<style scoped>
button {
  position: fixed;
  top: 200px;
  left: 300px;
  z-index: 100;
  padding: 10px 20px;
}
</style>