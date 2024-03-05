<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  new Cesium.Viewer('cesiumContainer')

  // 创建笛卡尔坐标
  // const position = new Cesium.Cartesian3(0,0,0)

  // 经纬度坐标转换为笛卡尔坐标
  const cartesian = Cesium.Cartesian3.fromDegrees(114,35,100)

  // 笛卡尔坐标转换为经纬度坐标
  let cartographic = Cesium.Cartographic.fromCartesian(cartesian)  // 笛卡尔坐标转弧度坐标
  let lon = Cesium.Math.toDegrees(cartographic.longitude) // 弧度坐标转为经纬度坐标(经度)
  let lat = Cesium.Math.toDegrees(cartographic.latitude) // 弧度坐标转为经纬度坐标(纬度)
  let height = cartographic.height  // 高度不用转
  console.log(lon,lat,height)

})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
