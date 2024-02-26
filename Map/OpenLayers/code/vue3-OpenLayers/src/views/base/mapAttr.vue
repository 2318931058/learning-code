<script setup>
import { inject, onMounted } from 'vue';
import initMap from '@/components/initMap.vue';
import { gaode_vector } from '@/assets/layers.js'
let map

onMounted(()=>{
    map = inject('$map')
})

function getValue() {
    // 获取地图上所有图层
    let layers = map.getLayers()
    console.log('maplayers', layers.array_)

    // 获取地图视图相关信息
    let view = map.getView()
    console.log('view信息', view)

    // 获取地图的尺寸
    let size = map.getSize()
    console.log('mapsize', size)

    // 获取当前视图的范围
    let extent = map.getView().calculateExtent(size)
    console.log('viewextent', extent)

    // 获取当前视图的缩放等级
    let zoom = map.getView().getZoom()
    console.log('viewzoom', zoom)

    // 获取当前视图的中心点
    let center = map.getView().getCenter()
    console.log('viewcenter', center)
}

function setValue() {
    // 设置地图的尺寸
    // map.setSize( [1000, 500])

    // 设置当前视图的缩放等级
    // map.getView().setZoom(8)

    // 设置当前视图的中心点
    map.getView().setCenter([90, 40])
}
</script>

<template>
    <initMap />
    <button class="get" @click="getValue()">获取地图属性</button>
    <button class="set" @click="setValue()">设置地图属性</button>
</template>

<style>
    button {
        padding: 10px 20px;
        position: fixed;
        left: 100px;
        background-color: red;
    }
    .get {
        top: 300px;
    }
    .set {
        top: 350px;
    }
</style>