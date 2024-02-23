<script setup>
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
let myMap
onMounted(() => {
    myMap = inject('$map')
    myMap.on('click', (event) => {
        const { lng, lat } = event.latlng
        // 创建标记（以图层形式添加到地图中）
        let markerLayer = L.marker([lat, lng], {
            title: "markerName"
        });
        // 将标记添加到地图中
        myMap.addLayer(markerLayer)
    })
})
const delMarker = () => {
    // 移除标记的方式与移除图层的方式相一致
    let layers = Object.values(myMap._layers)
    let requiredLayers = layers.filter(item => item.options.title == "markerName")	
    requiredLayers.forEach(item => item.remove())
}
</script>

<template>
    <initMap />
    <button @click="delMarker()">移除标记</button>
</template>

<style scoped>
button {
    z-index: 100000000;
    padding: 10px 20px;
    background-color: red;
    position: fixed;
    left: 300px;
    top: 300px;
}
</style>