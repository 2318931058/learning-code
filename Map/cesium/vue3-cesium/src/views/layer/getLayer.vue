<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 获取所有图层：返回一个包含所有图层的数组
    const allLayers = viewer.imageryLayers._layers
    console.log('allLayers', allLayers)

    // 获取索引为index的图层
    const index = 0
    // const bingMap = viewer.imageryLayers.get(index)
    const bingMap = viewer.imageryLayers._layers[index]
    console.log('bingMap', bingMap)
    
})
</script>

<template>
    <home />
</template>