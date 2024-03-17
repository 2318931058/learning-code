<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
import { load3dtiles, update3dtiles } from '@/utils/loadData/load3dTiles'
import facilities from '@/assets/data/geojson/facilities.json'

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
    viewer = inject('$viewer')

    load3dtiles(viewer, '/src/assets/data/geojson/b3dm/保利b3dm/tileset.json', (tileset) => {
        viewer.zoomTo(tileset)
        update3dtiles(tileset)
    })
})
</script>

<template>
    <home />

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