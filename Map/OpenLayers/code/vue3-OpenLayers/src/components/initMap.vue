<script setup>
// 引入OpenLayers资源
import { Map, View } from "ol";
import * as olProj from "ol/proj";

import { onMounted } from "vue";
import { app } from "@/main.js";
import { gaode_vector } from '@/assets/layers.js'

onMounted(() => {
  const map = new Map({
    target: "map",
    layers: [gaode_vector],
    view: new View({
      center: olProj.fromLonLat([108.945951, 34.465262]),   // olProj用于设置投影信息，下有fromLonLat和transform等众多方法
      zoom: 4
    }),
    controls: [],       // 关闭控件
  });
  // 将地图设置为全局变量
  app.provide('$map', map)
})
</script>

<template>
  <div class="home">
    <div id="map"></div>
  </div>
</template>


<style scoped>
#map {
  width: 100%;
  height: 656px;
  z-index: 0;
}
</style>