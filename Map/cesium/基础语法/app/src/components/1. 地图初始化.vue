<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  // 可以加载arcgis影像图层
  const esri = new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    enablePickFeatures: false
  })
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  new Cesium.Viewer('cesiumContainer', {
    // 指定影像图层(默认是谷歌地图)
    imageryProvider: esri,
    // 加载地形图层
    terrainProvider: Cesium.createWorldTerrain({
      // 水面特效
      requestWaterMask: true
    }),
    // 隐藏选中信息框
    infoBox:false,
    // 隐藏选中框
    selectionIndicator:false,
    // 开启场景动画
    // shouldAnimate: true,
    // 开启实体（线）贴地 
    // clampToGround: true, 
  })
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>

<style scoped></style>
