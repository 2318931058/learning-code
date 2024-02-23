<script setup>
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
// 设置线条的属性
let line = L.polyline([[35.1163738, 114.3813261], [19.98266558, 110.5075941]], {
    color: 'red',
    weight: 10
})
onMounted(() => {
    const myMap = inject('$map')
    myMap.addLayer(line)
})
</script>

<template>
    <initMap />
</template>