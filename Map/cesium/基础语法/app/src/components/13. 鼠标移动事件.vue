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
  })

  // 加载纽约
  const newYorkTileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(75343)
    })
  )
  viewer.flyTo(newYorkTileset)

  let lastPick
  handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction((evt)=>{
    // 拾取要素:与点击事件有所不同
    let pick = viewer.scene.pick(evt.endPosition)
    // pick就是获取到的实体
    if(pick){
      if(lastPick){
        lastPick.color = Cesium.Color.WHITE
      }
      pick.color = Cesium.Color.PURPLE
      lastPick = pick
    }
  },Cesium.ScreenSpaceEventType.MOUSE_MOVE)

  
  
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
