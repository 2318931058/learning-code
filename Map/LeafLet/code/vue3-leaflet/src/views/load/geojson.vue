<script setup>
import axios from 'axios'
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
let myMap, myCountry
const getData = async () => {
    const layerData = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    // 设置属性
    myCountry = L.geoJSON(layerData.data, {
        color: 'red', 
        weight: 5,
        opacity: 0.5
    })
    alert('数据获取成功')
    
}
const addData = () => {
    // 将数据添加到地图中
    myMap.addLayer(myCountry)
}
const delData = () => {
    // 将数据从地图中移除
    myCountry.clearLayers()
}
onMounted(() => {
    myMap = inject('$map')
})
</script>

<template>
    <initMap />
    <button class="get" @click="getData()">获取</button>
    <button class="add" @click="addData()">添加</button>
    <button class="del" @click="delData()">移除</button>
</template>

<style scoped>
button {
    z-index: 100000000;
    padding: 10px 20px;
    background-color: red;
}
.get {
    position: fixed;
    left: 300px;
    top: 150px;
}
.add {
    position: fixed;
    left: 300px;
    top: 250px;
}
.del {
    position: fixed;
    left: 300px;
    top: 350px;
}
</style>