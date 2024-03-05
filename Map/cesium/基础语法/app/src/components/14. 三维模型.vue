<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer, handler
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shouldAnimate: true,
    shadows: true
  })

  // 加载三维模型：属于实体的一种
  let position = Cesium.Cartesian3.fromDegrees(114, 30, 300)
  let orientation = Cesium.Transforms.headingPitchRollQuaternion(
    // 方向
    position,
    Cesium.HeadingPitchRoll.fromDegrees(0, 15, 0)
  )
  const entity = viewer.entities.add({
    position,
    orientation,
    model: {
      uri: '/src/assets/Cesium_Air.glb',
      minimumPixelSize: 200, //模型最小尺寸
      maximunScale: 5000, //最大比例尺大小
      show: true
    }
  })
  viewer.zoomTo(entity)
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
