<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  new Cesium.Viewer('cesiumContainer',{
    // 隐藏时间轴控件
    timeline:false,
    // 隐藏动画控件
    animation:false,
    // 隐藏图层选择控件
    baseLayerPicker:false,
    // 隐藏搜索控件
    geocoder:false,
    // 隐藏主页按钮
    homeButton:false,
    // 隐藏投影方式控件
    sceneModePicker:false,
    // 隐藏帮助按钮
    navigationHelpButton:false,
    // 隐藏全屏按钮
    fullscreenButton:false
  })

})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>

<style scoped>
/* 隐藏logo */
::v-deep .cesium-viewer-bottom{
  display: none;
}
</style>
