<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer, point1
let entitiesList = []
let removePoint = () => {
  // viewer.entities.remove(实体)可以移除实体
  // viewer.entities.remove(point1)

  // viewer.entities.removeById('id值')可以通过id值移除实体
  // viewer.entities.removeById('point1')
  
  // viewer.entities.getById('id值')可以获取指定id值的实体
  // const myPoint1 = viewer.entities.getById('point1')
  // viewer.entities.remove(myPoint1)

  // viewer.entities.removeAll()可以移除全部实体
  // viewer.entities.removeAll()

  // 若要删除具有某种特定属性的实体，可以将数组作为图层删除
  entitiesList.forEach(item=>{
    viewer.entities.remove(item)
  })
  entitiesList = []
}
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  point1 = viewer.entities.add({
    id: 'point1',
    position: Cesium.Cartesian3.fromDegrees(114, 35),
    point: {
      color: Cesium.Color.BLUE,
      pixelSize: 20
    }
  })
  entitiesList.push(point1) // 将具有某种特定属性的实体添加到数组中
  let point2 = viewer.entities.add({
    id: 'point2',
    position: Cesium.Cartesian3.fromDegrees(114.0001, 35),
    point: {
      color: Cesium.Color.BLUE,
      pixelSize: 20
    }
  })
  entitiesList.push(point2)
  let point3 = viewer.entities.add({
    id: 'point3',
    position: Cesium.Cartesian3.fromDegrees(114, 35.0001),
    point: {
      color: Cesium.Color.RED,
      pixelSize: 20
    }
  })
  viewer.zoomTo(point1)
})
</script>

<template>
  <button @click="removePoint()">删除</button>
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
