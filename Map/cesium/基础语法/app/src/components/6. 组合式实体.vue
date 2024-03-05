<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  const viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  // 组合式实体：一个实体里面包含多个小实体（viewer上只显示一个实体）
  const entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(114, 35, 100),
    billboard: {
      image: '/src/assets/location.png',
      scale: 0.5,
      height: 100
    },
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([114, 35, 0, 114, 35, 99]),
      material: Cesium.Color.RED,
      width: 5
    },
    label: {
      text: 'xx小区',
      pixelOffset: new Cesium.Cartesian2(0, -50) // 偏移值：左右、上下
    }
  })
  viewer.zoomTo(entity)
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
