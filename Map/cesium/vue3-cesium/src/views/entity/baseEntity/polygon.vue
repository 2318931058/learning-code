<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 多边形，也就是面
    const cartesian3Array = Cesium.Cartesian3.fromDegreesArray([114, 30, 114, 35, 118, 30])          // 面坐标
    const polygon = viewer.entities.add({
        polygon: {
            id: 'polyline' + Date.now(),
            hierarchy: {
                positions: cartesian3Array,         //  位置
            },
            height: 100,                            // 相对于地面的高度
            extrudedHeight: 100000,                 // 多边形的高度
            fill: true,                             // 是否填充为多边形
            material:Cesium.Color.GREENYELLOW,      // 材质，即颜色
            outline: true,                          // 指定是否勾勒多边形轮廓
            outlineColor:Cesium.Color.RED,          // 多边形轮廓颜色
            outlineWidth: 1,                        // 多边形轮廓宽度
        }
    })
    viewer.zoomTo(polygon)
})
</script>

<template>
    <home />
</template>