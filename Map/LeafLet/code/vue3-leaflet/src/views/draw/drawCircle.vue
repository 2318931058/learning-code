<script setup>
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
// 设置圆形的属性
let circle = L.circle([35.1163738, 114.3813261], {
    color: 'red',
    radius: 1000000,
    fillColor: 'green',
    fillOpacity: 0.5
})
onMounted(() => {
    const myMap = inject('$map')
    myMap.addLayer(circle)
})
</script>

<template>
    <initMap />
</template>