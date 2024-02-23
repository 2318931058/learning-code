<script setup>
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
// 设置区域/面的属性
let area = L.polygon([[35.1163738, 114.3813261], [19.98266558, 110.5075941], [40, 120]], {
    color: 'red',
    weight: 10,
    fillColor: 'green', 
    fillOpacity: 0.5
})
onMounted(() => {
    const myMap = inject('$map')
    myMap.addLayer(area)
})
</script>

<template>
    <initMap />
</template>