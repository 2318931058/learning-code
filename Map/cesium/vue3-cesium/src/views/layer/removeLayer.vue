<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 移除cesium的图层（默认为bingMap）
    const myLayer = viewer.imageryLayers._layers[0]
    viewer.imageryLayers.remove(myLayer)
    
})
</script>

<template>
    <home />
</template>