<script setup>
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
import * as Cesium from 'cesium/Source/Cesium'
import axios from 'axios'
let viewer, handler, pointArray

onMounted(() => {
    viewer = inject('$viewer')

    addData()

    // 创建事件对象
    handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 注册单击事件
    // handler.setInputAction((event) => {
    //     // 获取点击位置坐标
    //     let position = viewer.scene.pickPosition(event.position)        // 世界坐标
    //     // 判断是否在地球上：Cesium.defined(position)
    //     if (Cesium.defined(position)) {
    //         viewer.entities.add({
    //             position: position,
    //             point: {
    //                 color: Cesium.Color.BLUE,
    //                 pixelSize: 20
    //             }
    //         })
    //         console.log(`添加了一个点实体，其坐标为：${position}`)
    //     } else {
    //         console.log('点击的位置不在添加的图层上')
    //     }
    // }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 注册双击事件
    // handler.setInputAction((event) => {
    //     // 判断是否点击了添加的要素
    //     let pickFeature = viewer.scene.pick(event.position)
    //     if (pickFeature) {
    //         // pickFeature.id是实体集
    //         if (pickFeature.id) {
    //             pickFeature.id.point.color = Cesium.Color.RED
    //             console.log(`你点击了坐标为${event.position}的点实体, 并将其填充颜色改为红色`)
    //         }
    //     } else {
    //         console.log('未点击实体')
    //     }
    // }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 练习：左键单击划线，右键单击结束绘制
    pointArray = []
    let polylineFeature = viewer.entities.add({
        polyline: {
            positions: [],
            width: 10,
            material: Cesium.Color.RED
        }
    })

    handler.setInputAction((event) => {
        let position = viewer.scene.pickPosition(event.position)        // 获取点击位置坐标
        if (Cesium.defined(position)) {                                 // 判断是否在地球上：Cesium.defined(position)
            pointArray.push(position)
            polylineFeature.polyline.positions = pointArray
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    handler.setInputAction(() => {
        pointArray.forEach((item) => {
            viewer.entities.remove(item)
        })
        pointArray = []
        // 移除事件
        handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
        handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
        alert('结束绘制')
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)

})

function addData() {
    axios.get('/src/assets/data/geojson/中华人民共和国.json').then(result => {
        let promise = Cesium.GeoJsonDataSource.load(result.data)
        viewer.dataSources.add(promise)
        viewer.zoomTo(promise)
    })
}
</script>

<template>
    <home />
</template>