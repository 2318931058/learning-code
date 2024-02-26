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

    // 获取某个图层是否可见
    let visible = gaode_vector.getVisible()
    console.log('visible', visible)

    // 获取某个图层的堆叠层级
    let zindex = gaode_vector.getZIndex()
    console.log('zindex', zindex)
    
    // 获取某个图层的透明度
    let opacity = gaode_vector.getOpacity()
    console.log('opacity', opacity)    
}

function setValue() {
    // 设置图层的visible
    // gaode_vector.setVisible(false)

    // 设置图层的zindex
    // gaode_vector.setZIndex(0)

    // 设置图层的opacity
    gaode_vector.setOpacity(0)
}
</script>

<template>
    <initMap />
    <button class="get" @click="getValue()">获取图层的visible、zindex、opacity</button>
    <button class="set" @click="setValue()">设置图层的visible、zindex、opacity</button>
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