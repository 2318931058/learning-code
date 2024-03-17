<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import { onMounted, provide } from 'vue'
import { app } from '../main.js'

onMounted(() => {
  // 修改地球默认显示的矩形范围：参数依次为西方、南方、东方和北方
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(73.29, 15, 135.2, 50);
  // 控制相机距离地面的位置。如果比0小，就可以更加接近地面
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;


  // 创建esri图层（默认底图为必应地图）
  const esri = new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    enablePickFeatures: false
  })

  // 创建token
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'

  // 创建视图
  const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: esri,                                  // 指定影像图层（默认是谷歌地图）
    terrainProvider: Cesium.createWorldTerrain({            // 配置地形提供者，加载地形图层
      requestWaterMask: true                                // 水面特效
    }),
    infoBox: false,                                         // 选中信息框
    selectionIndicator: false,                              // 选中框
    shouldAnimate: true,                                    // 场景动画(czml文件需要开启场景动画)
    clampToGround: true,                                   // 贴地属性
    shadows: true,                                          // 阴影效果

    // 控件
    timeline: false,                                        // 时间轴
    animation: false,                                       // 动画
    baseLayerPicker: false,                                 // 图层选择
    geocoder: false,                                        // 搜索
    homeButton: false,                                      // 主页
    navigationHelpButton: false,                            // 帮助
    fullscreenButton: false,                                // 全屏
    sceneModePicker: false,                                 // 投影方式
  })

  // 关闭cesium的logo（或者使用css代码关闭）
  viewer._cesiumWidget._creditContainer.style.display = "none";

  // 地形遮挡：开启后地形会遮挡看不到的区域
  viewer.scene.globe.depthTestAgainstTerrain = true

  // 对大气和雾启用动态照明效果
  viewer.scene.globe.enableLighting = true

  app.provide('$viewer', viewer)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
/* 地图大小 */
#cesiumContainer {
  width: 86vw;
  height: 91.6vh;
  overflow: hidden;
}

/* 隐藏cesium的logo */
/* :deep(.cesium-viewer-bottom) {
  display: none;
} */
</style>