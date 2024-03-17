<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 立方体box
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100)
    const box = viewer.entities.add({
        position: cartesian3,                                           // 实体位置
        box: {
            dimensions: new Cesium.Cartesian3(100, 200, 300),            // 长宽高
            material: Cesium.Color.GREEN,                               // 实体材质，即颜色
            fill: true,                                                 // 是否填充
            outline: true,                                              // 受否勾勒轮廓
            outlineColor: Cesium.Color.RED,                             // 轮廓颜色
            outlineWidth: 10,                                           // 轮廓宽度
        }
    })
    viewer.zoomTo(box)
})
</script>

<template>
    <home />
</template>