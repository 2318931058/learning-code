<script setup>
import { ref, onMounted } from 'vue'
import { app } from "@/main.js";
// 引入资源
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';     //可以将标签改为中文


let map
let mapContainer = ref()
function init() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbmdjaGFvODg2NiIsImEiOiJjbGhzcWowMHUwYTNyM2VwNXZhaXhjd3Q4In0.FEh2q7sEW88Z1B5GcK_TDg'
    map = new mapboxgl.Map({
        // container用于设置地图容器
        container: mapContainer.value,
        // style用于设置地图图层
        style: 'mapbox://styles/mapbox/streets-v12',
        // center用于设置地图中心点
        center: [108.945951, 34.465262],
        // zoom用于设置地图缩放级别
        zoom: 2,
        // 俯仰角：取值范围是(0,90)，默认值为0
        pitch: 0,
        // 水平角：取值范围是(-180,180),默认值为0
        bearing: 0,
        // projection用于设置地图投影坐标系：equalEarth加上会变二维,默认是globe
        projection: 'globe',
        // antialias为抗锯齿，通过false关闭以提升性能
        antialias: false,
        // 禁止双击放大
        doubleClickZoom: false
    })

    // 设置语言为中文
    map.addControl(new MapboxLanguage({ defaultLanguage: 'zh-Hans' }))

    app.provide('$map', map)
}

onMounted(() => {
    init()
    
})
</script>

<template>
    <div ref="mapContainer">
        
    </div>
</template>

<style scoped>
div {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
}

/* 隐藏商标信息 */
.mapboxgl-ctrl-bottom-left,
.mapboxgl-ctrl-bottom-right {
    display: none;
}

.mapboxgl-ctrl-icon {
    box-sizing: border-box;
}

</style>
