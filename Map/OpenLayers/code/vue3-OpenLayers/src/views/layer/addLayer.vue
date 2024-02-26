<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject } from 'vue';
import { gaode_image } from '@/assets/layers.js'
let map
onMounted(()=>{
    map = inject('$map')
})
const addlayer = () => {
    // addLayer方法用于添加特定图层
    map.addLayer(gaode_image)
}
</script>

<template>
    <initMap />
    <button class="add" @click="addlayer()">添加图层</button>
</template>

<style scoped>
button {
    padding: 10px 20px;
    position: fixed;
    top: 300px;
    left: 100px;
    background-color: red;
}
</style>