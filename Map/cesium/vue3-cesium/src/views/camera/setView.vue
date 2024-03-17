<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 1000000)
    
    // setView方法用于快速切换相机的位置，包括destination位置和orientation方向(heading、pitch、roll)
    viewer.camera.setView({
        destination: cartesian3,                        // 可以是世界坐标系、实体、dataSource、promise
        orientation: {                                  // 默认方向是（0，-90， 0）
            heading: Cesium.Math.toRadians(0),          // 偏航角：左右摇头
            pitch: Cesium.Math.toRadians(-90),          // 俯仰角：上下抬/点头
            roll: Cesium.Math.toRadians(0)              // 旋转角：左右歪头
        }
    })
    
    
})
</script>

<template>
    <home />
</template>