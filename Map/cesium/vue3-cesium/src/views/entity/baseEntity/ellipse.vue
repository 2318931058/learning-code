<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // 椭圆柱实体
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100)
    const ellipse = viewer.entities.add({
        position: cartesian3,
        ellipse: {
            semiMajorAxis: 500,             // 长半轴
            semiMinorAxis: 200,             // 短半轴
            extrudeHeight: 300,             // 实体高度
            height: 10000,                  // 实体距离地面高度
            fill: true,                     // 是否填充材质
            material: Cesium.Color.RED,     // 实体材质，即颜色
            rotation: Math.PI / 2,          // 实体从北方顺时针旋转的角度 
            outline: true,                  // 指定是否勾勒多边形轮廓
            outlineColor:Cesium.Color.BLUE,  // 多边形轮廓颜色
            outlineWidth: 10,               // 多边形轮廓宽度          
        }
    })
    viewer.zoomTo(ellipse)
})
</script>

<template>
    <home />
</template>