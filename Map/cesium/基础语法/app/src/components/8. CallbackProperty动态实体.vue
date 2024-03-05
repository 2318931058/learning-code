<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  let viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  // CallbackProperty可以生成动态实体
  let lon,
    lat,
    num = 0
  const line = viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        num += 0.005
        lon = 120 + num
        lat = 30 + num
        if (lon < 121) {
          return Cesium.Cartesian3.fromDegreesArray([120, 30, lon, lat])
        } else {
          // 给position重新赋值，跳出CallbackProperty循环
          line.polyline.positions = Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 31])
        }
      }, false), // 必须传递false
      width: 10,
      material: Cesium.Color.YELLOW
    }
  })
  viewer.zoomTo(line)
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
