<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')
    
    // -----------------------------------------------------------------------------------------------------------------------------------

    // 1. 创建地理坐标（以弧度形式）：默认以wgs84为空间参考，分为弧度和经纬度两种形式，但cesium中无具体的经纬度对象
    const Cartographic = new Cesium.Cartographic(1, 2, 3)
    console.log('地理坐标(分为弧度和经纬度两种形式)', Cartographic)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 2. 弧度和角度的转换

    // 2.1 弧度转角度(1rad约等于57度， 公式为：180/Π * 弧度)
    const lon = Cesium.Math.toDegrees(Cartographic.longitude)
    const lat = Cesium.Math.toDegrees(Cartographic.latitude)
    const height = Cesium.Math.toDegrees(Cartographic.height)
    console.log(`弧度转角度：`, lon, lat, height)

    // ------------------------------------------------------------------------------------------------------

    // 2.2 角度转弧度(公式为：Π/180 * 角度)：两种方式均可

    // 方式一
    // const lonRadians = Cesium.Math.toRadians(lon)
    // const latRadians = Cesium.Math.toRadians(lat)
    // const heightRadians = Cesium.Math.toRadians(height)
    // console.log(`弧度转角度：`, lonRadians, latRadians, heightRadians)

    // ----------------------------------------------------------------------------

    // 方式二
    const RadiansCoordinate = Cesium.Cartographic.fromDegrees(lon, lat, height)
    console.log(`弧度转角度：`, RadiansCoordinate)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 3. 转为世界坐标

    // 3.1 从经纬度转
    
    // 方式一
    const fromDegreesToCartesian3 = Cesium.Cartesian3.fromDegrees(lon, lat, height)
    console.log('从经纬度转为世界坐标Cartesian3', fromDegreesToCartesian3)

    // ----------------------------------------------------------------------------

    // 方式二
    // const ellipsoid = viewer.scene.globe.ellipsoid      // 获取椭球体对象
    // const fromDegreesToCartographic = Cesium.Cartographic.fromDegrees(lon, lat, height)      // 转为弧度
    // const fromDegreesToCartesian3 = ellipsoid.cartographicToCartesian(fromDegreesToCartographic)
    // console.log('从经纬度转为世界坐标Cartesian3', fromDegreesToCartesian3)

    // ------------------------------------------------------------------------------------------------------

    // 3.2 从弧度转

    // 方式一
    // const fromRadiansToCartesian3 = Cesium.Cartesian3.fromRadians(Cartographic.longitude, Cartographic.latitude, Cartographic.height)      
    // console.log('从弧度转为世界坐标Cartesian3', fromRadiansToCartesian3)

    // ----------------------------------------------------------------------------

    // 方式二
    // const ellipsoid = viewer.scene.globe.ellipsoid      // 获取椭球体对象
    // const fromRadiansToCartesian3 = ellipsoid.cartographicToCartesian(Cartographic)
    // console.log('从弧度转为世界坐标Cartesian3', fromRadiansToCartesian3)

    // ----------------------------------------------------------------------------

    // 方式三
    // const fromRadiansToCartesian3 = Cesium.Cartographic.toCartesian(Cartographic)
    // console.log('从弧度转为世界坐标Cartesian3', fromRadiansToCartesian3)

    // ----------------------------------------------------------------------------

    // 方式四：单个坐标用cartographicToCartesian， 多个坐标用cartographicToCartesianArray
    const fromRadiansToCartesian3 = Cesium.Ellipsoid.WGS84.cartographicToCartesian(Cartographic)
    console.log('从弧度转为世界坐标Cartesian3', fromRadiansToCartesian3)

    // -----------------------------------------------------------------------------------------------------------------------------------
    
    // 4. 地理坐标（经纬度）转为屏幕坐标
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 100)
    const cartesian2 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian3)
    console.log('转为屏幕坐标cartesian2', cartesian2)

    
    
})
</script>

<template>
    <home />
</template>