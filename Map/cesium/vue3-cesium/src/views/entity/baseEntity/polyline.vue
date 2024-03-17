<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 线实体：若要创建带有高度的线，可以使用fromDegreesArrayHeights
    const cartesian3Array = Cesium.Cartesian3.fromDegreesArray([114, 30, 114, 35, 118, 30])         // 线条坐标
    const polyline = viewer.entities.add({
        polyline: {
            id: 'polyline' + Date.now(),
            positions: cartesian3Array,              // 线条位置
            width: 5,                               // 线条宽度
            loop: false,                            // 是否在最后一行和第一行位置之间添加线段以使该线段成为环状
            material: Cesium.Color.RED,             // 线条材质，即线条颜色
        }
    })
    viewer.zoomTo(polyline)
})
</script>

<template>
    <home />
</template>