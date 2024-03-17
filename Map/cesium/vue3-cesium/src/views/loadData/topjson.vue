<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 与加载geojson格式数据相同
    let promise = Cesium.GeoJsonDataSource.load('/src/assets/data/topjson/usa.topojson')
    viewer.dataSources.add(promise)
    viewer.zoomTo(promise)
})
</script>

<template>
    <home />
</template>