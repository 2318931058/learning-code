<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 文本
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 1000)
    const label = viewer.entities.add({
        position: cartesian3,
        label: {
            text: 'cesium框架',                         // 文本内容
            fillColor: Cesium.Color.RED,                // 字体颜色
            scale: 0.5,                                 // 字体大小
            font: '30px sans-serif',                    // 字体
            showBackground: true,                       // 是否展示背景
            backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),
            pixelOffset: new Cesium.Cartesian2(0, -50),     // 偏移值：左右、上下
        }
    })
    viewer.zoomTo(label)
})
</script>

<template>
    <home />
</template>