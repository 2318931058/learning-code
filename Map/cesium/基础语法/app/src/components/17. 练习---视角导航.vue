<script setup>
import * as Cesium from 'cesium'
import facilities from './assets/facilities.json'
import { load3dtiles, update3dtiles } from './tool/load.js'
import { onMounted } from 'vue'
let viewer
let jumpView = (evt) => {
  facilities.forEach((item) => {
    if (item.name == evt) {
      let cameraPosition = item.cameraPosition.split(',').map((item) => {
        return Number(item)
      })
      let cameraOrt = item.cameraOrt.split(',').map((item) => {
        return Number(item)
      })
      console.log(cameraOrt)
      viewer.camera.flyTo({
        destination: new Cesium.Cartesian3(...cameraPosition),
        orientation: {
          heading: cameraOrt[0],
          pitch: cameraOrt[1],
          roll: cameraOrt[2]
        },
        duration: 3
      })
    }
  })
}

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })
  load3dtiles(viewer, '/src/assets/b3dm/保利b3dm/tileset.json', (tileset) => {
    viewer.zoomTo(tileset)
    update3dtiles(tileset)
  })
})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>小区设施</span>
          </div>
        </template>
        <div @click="jumpView(item.name)" v-for="item in facilities" :key="item" class="text item">
          {{ item.name }}
        </div>
      </el-card>
    </template>
  </el-card>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>

<style scoped>
.box-card {
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 100;
}
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 110px;
  text-align: center;
}
</style>
