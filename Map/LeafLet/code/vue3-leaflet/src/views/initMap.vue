<script setup>
import { onMounted } from "vue";
import { app } from "@/main.js";

onMounted(() => {
    const url =
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hlbmdiZW5jaGFvIiwiYSI6ImNsODU3aGRiODA0Y2UzcHBzZmFlcmdqZ2sifQ.8k59W_pB_Riwe6o-MneRlA";
    const layer = L.tileLayer(url, {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
    });
    const map = L.map("map", {
        layers: [layer],
        // center:[纬度,经度]
        center: [34.322700, 108.552500],
        zoom: 4,
    });
    // 设置地图为全局变量
    app.provide("$map", map);
});
</script>

<template>
    <div id="map" style="width: 100vw;height: 100vh;"></div>
</template>
  