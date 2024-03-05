<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer, data 
let toDel = ()=>{
  // 删除可以直接再dataSource中删
  // viewer.dataSources.remove(data)
  viewer.dataSources.removeAll()
}
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    // czml文件需要开启场景动画
    shouldAnimate: true 
  })

  
  // // 使用turf库生成单条线的geojson数据
  // const linestring = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]]);
  // // 加载geojson数据(方式一)
  // let promise = Cesium.GeoJsonDataSource.load(linestring)
  // promise.then((res)=>{
  //   const entity = res.entities.values[0]
  //   viewer.entities.add(entity)
  //   viewer.zoomTo(entity)
  // })

  // // 使用turf库生成多条线的geojson数据
  // let multiLine = turf.multiLineString([[[0,0],[4,4]],[[7,7],[10,10]]]);
  // // 加载geojson数据（方式二）
  // let promise = Cesium.GeoJsonDataSource.load(multiLine)
  // promise.then((res)=>{
  //   // cesium的dataSources支持直接添加geojson数据(直接将实体放在dataSource中，与entity无关)
  //   data = res
  //   viewer.dataSources.add(res)
  // })

  // 使用turf库生成多边形的geojson数据
  // let polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-5, 52]]]);
  // // 加载geojson数据（方式三：cesium的dataSources支持直接添加promise）
  // let promise = Cesium.GeoJsonDataSource.load(polygon)
  // viewer.dataSources.add(promise)
  // viewer.zoomTo(promise)    // zoomTo可以跳实体、dataSource、promise

  // 加载topojson数据
  // let promise = Cesium.GeoJsonDataSource.load('/src/assets/usa.topojson')
  // viewer.dataSources.add(promise)
  // viewer.zoomTo(promise)

  // 加载kmz数据
  // let promise = Cesium.KmlDataSource.load('/src/assets/gdp2008.kmz')
  // viewer.dataSources.add(promise)
  // viewer.zoomTo(promise)
  
  // 加载czml数据
  let promise = Cesium.CzmlDataSource.load('/src/assets/Vehicle.czml')
  promise.then(res=>{
    viewer.dataSources.add(res)
    let entity = res.entities.getById('Vehicle')
    viewer.trackedEntity = entity     // trackedEntity可以实现一直移动相机跟踪entity目标
  })
})
</script>

<template>
  <button @click="toDel()">删除</button>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>

<style scoped>
button {
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 100;
  padding: 10px 20px;
}
</style>
