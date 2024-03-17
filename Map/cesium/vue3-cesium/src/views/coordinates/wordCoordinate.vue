<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 1. 创建世界坐标，即笛卡尔空间直角坐标Cartesian3：以椭球中心为原点的空间直角坐标系
    const cartesian3 = new Cesium.Cartesian3(110, 30, 100)
    console.log('世界坐标', cartesian3)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 2. 世界坐标转为地理坐标
    
    // 2.1 转为地理坐标的弧度

    // 方式一
    // const Cartographic = Cesium.Cartographic.fromCartesian(cartesian3)
    // console.log('世界坐标转为地理坐标（弧度）', Cartographic)

    // ----------------------------------------------------------------------

    // 方式二
    // const ellipsoid = viewer.scene.globe.ellipsoid      // 获取椭球体对象
    // const Cartographic = ellipsoid.cartesianToCartographic(cartesian3)
    // console.log('世界坐标转为地理坐标（弧度）', Cartographic)

    // ----------------------------------------------------------------------

    // 方式二：单个坐标用cartesianToCartographic，多个坐标用cartesianArrayToCartographic
    const Cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian3)
    console.log('世界坐标转为地理坐标（弧度）', Cartographic)

    // ---------------------------------------------------------------------------------------------

    // 2.2 转为地理坐标的经纬度
    const radianCoordinate = Cesium.Cartographic.fromCartesian(cartesian3)    // 先转为弧度坐标
    const lon = Cesium.Math.toDegrees(radianCoordinate.longitude)       // 再转为经纬度坐标
    const lat = Cesium.Math.toDegrees(radianCoordinate.latitude)
    const height = radianCoordinate.height
    console.log('世界坐标转为地理坐标（经纬度）', lon, lat, height)

    // -----------------------------------------------------------------------------------------------------------------------------------
    
    // 3. 转为屏幕坐标，即cartesian2
    const cartesian2 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian3)
    console.log('转为屏幕坐标cartesian2', cartesian2)
})
</script>

<template>
    <home />
</template>