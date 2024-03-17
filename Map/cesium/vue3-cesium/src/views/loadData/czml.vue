<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // czml是一种用于渲染和描述动态地图场景的数据格式
    let promise= Cesium.CzmlDataSource.load('/src/assets/data/czml/Vehicle.czml')
    promise.then(res => {
        viewer.dataSources.add(res)
        let entity = res.entities.getById('Vehicle')
        // trackedEntity可以实现一直移动相机跟踪entity目标
        viewer.trackedEntity = entity
    })
    
})
</script>

<template>
    <home />
</template>