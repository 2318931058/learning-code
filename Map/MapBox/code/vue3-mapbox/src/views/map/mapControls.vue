<script setup>
import { onMounted, inject } from 'vue';
import initMap from '@/components/initMap.vue';

let map

onMounted(() => {
    map = inject('$map')

    map.on('style.load', () => {
        // 设置大气层样式
        map.setFog({
            // 设置大气层的颜色
            'color': '#dc9f9f',
            // 设置大气层周边的颜色
            'high-color': '#245bde',
            // 设置星空颜色
            'space-color': '#333',
            // 设置大气厚度
            'horizon-blend': 0.02,
            // 设置初次渲染时背景的亮度
            'star-intensity': 0.6
        })
    })
})
</script>

<template>
    <initMap />
</template>