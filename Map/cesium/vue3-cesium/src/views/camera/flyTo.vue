<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100000)

    // flyTo是带有飞行动画的setView：包括destination位置、orientation方向(heading、pitch、roll)和duration
    viewer.camera.flyTo({
        destination: cartesian3,                            // 可以是世界坐标系、实体、dataSource、promise
        orientation: {                                      // 默认方向是（0，-90， 0）
            heading: Cesium.Math.toRadians(0),              // 偏航角：左右摇头
            pitch: Cesium.Math.toRadians(-90),              // 俯仰角：上下抬/点头
            roll: Cesium.Math.toRadians(0)                  // 旋转角：左右歪头
        },
        duration: 3                                         // 飞行动画持续时间
    })
    
})
</script>

<template>
    <home />
</template>