<script setup>
import { onMounted } from "vue";
let myMap, layer

onMounted(() => {
    const url =
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hlbmdiZW5jaGFvIiwiYSI6ImNsODU3aGRiODA0Y2UzcHBzZmFlcmdqZ2sifQ.8k59W_pB_Riwe6o-MneRlA";
    layer = L.tileLayer(url, {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
    });
    myMap = L.map("map", {
        // 方式一：在地图的layers属性中添加
        // layers: [layer],
        center: [34.322700, 108.552500],            // center:[纬度,经度]
        zoom: 4,
    });
});

const addLayer = () => {
    // 方式二：通过地图的addLayer方法添加：myMap为地图名称, layer为图层名称
    myMap.addLayer(layer)

    // 方式三：通过图层的addTo方法添加：layer为图层名称，myMap为地图名称
    // layer.addTo(myMap)
}
</script>

<template>
    <button @click="addLayer()">添加图层</button>
    <div id="map" style="width: 100vw;height: 100vh;"></div>
</template>

<style scoped>
button {
    z-index: 100000000;
    position: fixed;
    left: 300px;
    top: 300px;
    padding: 10px 20px;
    background-color: red;
}
</style>
  