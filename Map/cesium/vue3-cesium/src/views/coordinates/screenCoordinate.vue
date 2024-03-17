<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 1. 创建屏幕坐标：屏幕坐标也就是cartesian2，即二维笛卡尔坐标
    const cartesian2 = new Cesium.Cartesian2(110, 30)
    console.log('屏幕坐标系', cartesian2)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 2. 屏幕坐标转世界坐标：Cartesian2转为Cartesian3

    // 2.1 不包含地形、模型等场景的空间坐标
    // const cartesian3 = viewer.scene.camera.pickEllipsoid(cartesian2);
    // console.log('不包含地形、模型等场景的空间坐标', cartesian3)

    // ------------------------------------------------------------------------------------
    
    // 2.2 包含地形、模型等场景的空间坐标
    // let cartesian3 = viewer.scene.pickPosition(cartesian2);
    // console.log('包含地形、模型等场景的空间坐标', cartesian3)

    // ------------------------------------------------------------------------------------

    // 2.3 通过相机与屏幕点位连线求取坐标(屏幕坐标转地表笛卡尔空间坐标)
    const ray = viewer.camera.getPickRay(cartesian2)
    const cartesian3 = viewer.scene.globe.pick(ray, viewer.scene)
    console.log('', cartesian3)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 3. 屏幕坐标转为经纬度坐标：先转为世界坐标，再由世界坐标转为弧度坐标，最后转为经纬度坐标

})
</script>

<template>
    <home />
</template>