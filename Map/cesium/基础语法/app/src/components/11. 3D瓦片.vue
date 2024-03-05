<script setup>
import * as Cesium from 'cesium'
import {load3dtiles, update3dtiles} from './tool/load.js'
import { onMounted } from 'vue'
let viewer
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  // 加载纽约
  // const newYorkTileset = viewer.scene.primitives.add(
  //   new Cesium.Cesium3DTileset({
  //     url: Cesium.IonResource.fromAssetId(75343)
  //   })
  // )
  // viewer.flyTo(newYorkTileset)

  // 加载墨尔本
  // const melbourneTileset = viewer.scene.primitives.add(
  //   new Cesium.Cesium3DTileset({
  //     url: Cesium.IonResource.fromAssetId(69380)
  //   })
  // )
  // viewer.flyTo(melbourneTileset)

  // 练习---加载本地文件
  // const melbourneTileset = viewer.scene.primitives.add(
  //   new Cesium.Cesium3DTileset({
  //     url:'/src/assets/b3dm/保利b3dm/tileset.json'
  //   })
  // )
  // viewer.flyTo(melbourneTileset)

  // 使用工具加载3dTile
  load3dtiles(viewer, '/src/assets/b3dm/保利b3dm/tileset.json',(tileset)=>{
    viewer.zoomTo(tileset)
    update3dtiles(tileset)
  })

})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
