<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'

let viewer, point1

function getEntity() {
    const myEntity = viewer.entities.getById('point1')
    console.log(myEntity)
}

onMounted(() => {
    viewer = inject('$viewer')

    point1 = viewer.entities.add({
        id: 'point1',
        position: Cesium.Cartesian3.fromDegrees(110, 30, 1000000),
        point: {
            color: Cesium.Color.PURPLE,
            pixelSize: 20,
            outlineColor: Cesium.Color.RED,
            outlineWidth: 10
        }
    })
})
</script>

<template>
    <home />
    <button @click="getEntity()">获取实体</button>
</template>

<style scoped>
button {
    position: fixed;
    top: 200px;
    left: 300px;
    z-index: 100;
    padding: 10px 20px;
}
</style>