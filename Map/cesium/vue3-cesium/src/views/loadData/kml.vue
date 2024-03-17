<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // kml数据是一种基于xml格式的数据
    let promise = Cesium.KmlDataSource.load('/src/assets/data/kmz/gdp2008.kmz')
    viewer.dataSources.add(promise)
    viewer.zoomTo(promise)
})
</script>

<template>
    <home />
</template>