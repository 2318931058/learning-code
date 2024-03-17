<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
let viewer

function addEntity() {
    const point = viewer.entities.add({
        id: 'point' + Date.now(),
        position: Cesium.Cartesian3.fromDegrees(110, 30, 10000),
        point: {
            color: Cesium.Color.PURPLE,
            pixelSize: 20,
            outlineColor: Cesium.Color.RED,
            outlineWidth: 10
        }
    })
    viewer.zoomTo(point)
}

onMounted(() => {
    viewer = inject('$viewer')
})
</script>

<template>
    <home />
    <button @click="addEntity()">添加实体</button>
</template>

<style scoped>
    button {
        position: fixed;
        left: 300px;
        top: 200px;
        padding: 10px 20px;
    }
</style>