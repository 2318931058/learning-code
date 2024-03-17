<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 圆柱、圆锥
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100)
    const cylinder = viewer.entities.add({
        position: cartesian3,
        cylinder: {
            topRadius: 0,                           // 顶部半径
            bottomRadius: 1000,                     // 底部半径
            length: 500,                            // 高度
            fill: true,                             // 填充材质
            material: Cesium.Cartesian3.RED,        // 填充颜色
            outline: true,                          // 受否勾勒轮廓
            outlineColor: Cesium.Color.BLUE,        // 轮廓颜色
            outlineWidth: 10,                       // 轮廓宽度
            slices: 128,                            // 圆柱/锥体周边的边数
        }
    })
    viewer.zoomTo(cylinder)
})
</script>

<template>
    <home />
</template>