<script setup>
import { inject, onMounted } from 'vue';
import initMap from '@/components/initMap.vue';

onMounted(()=>{
    const map = inject('$map')
    map.on('click', (event)=>{
        // 获取点击位置坐标
        const [lng, lat] = event.coordinate
        // 漫游到指定位置
        map.getView().animate({
            center:[lng, lat],
            zoom: 8,
            duration: 1000
        })
    })
})
</script>

<template>
    <initMap />
</template>