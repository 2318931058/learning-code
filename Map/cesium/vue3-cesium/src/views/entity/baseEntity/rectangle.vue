<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 创建一个矩形范围：new Cesium.Rectangle.fromDegrees(west, south, east, north)
    const position = Cesium.Rectangle.fromDegrees(110, 30, 120, 40)         // 左下角和右上角的坐标
    const rectangle = viewer.entities.add({
        rectangle: {
            coordinates: position,                  // 实体位置
            height: 10000,                          // 实体距离椭球表面的高度
            fill: true,                             // 是否填充为多边形
            material: Cesium.Color.GREENYELLOW,     // 实体颜色，也可以使用图片填充
            extrudeHeight: 1000,                    // 实体高度
            outline: true,                          // 指定是否勾勒多边形轮廓
            outlineColor:Cesium.Color.RED,          // 多边形轮廓颜色
            outlineWidth: 10,                       // 多边形轮廓宽度
            rotation: Math.PI / 2,                  // 实体从北方顺时针旋转的角度
        }
    })
})
</script>

<template>
    <home />
</template>