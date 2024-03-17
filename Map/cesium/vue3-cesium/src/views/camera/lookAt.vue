<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100000)

    // lookAt方法用于将视角固定在某处，可以任意旋转视角，但是不能改变位置
    const offset = new Cesium.HeadingPitchRange(        // 设置角度偏移
        Cesium.Math.toRadians(0),                       // 偏航角：左右摇头， 默认为0
        Cesium.Math.toRadians(-90),                     // 俯仰角：上下抬/点头， 默认为-90
        100                                             // 中心点距离地面的距离
    )
    viewer.camera.lookAt(cartesian3, offset )           // 可以是世界坐标系、实体、dataSource、promise
    
})
</script>

<template>
    <home />
</template>