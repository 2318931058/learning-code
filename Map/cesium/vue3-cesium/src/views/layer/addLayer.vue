<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 移除cesium的图层（默认为bingMap）
    const myLayer = viewer.imageryLayers._layers[0]
    viewer.imageryLayers.remove(myLayer)

    // 创建图层
    const arcigisLayer = new Cesium.ArcGisMapServerImageryProvider({
        name: 'arcgis_layer',
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
        enablePickFeatures: false
    })
    
    // 添加图层
    viewer.imageryLayers.addImageryProvider(arcigisLayer)


})
</script>

<template>
    <home />
</template>