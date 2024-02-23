<script setup>
import { inject, onMounted } from 'vue'
import initMap from '@/views/initMap.vue'
let myMap, marker
onMounted(() => {
    myMap = inject('$map')                    // 从全局获取map
    myMap.on('click', (event) => { 
        const { lng, lat } = event.latlng
        marker = L.marker([lat, lng],{
            title:'MyMarker'                    // 创建标记时添加title属性（marker是以图层形式添加，故此处用marker模拟正常图层）
        })
        myMap.addLayer(marker)
    })
})

const getMarkerLayer = () => {
    // 获取所有图层：Object.values(myMap._layers)
    let layers = Object.values(myMap._layers)
    console.log(layers)
}
</script>


<template>
    <button @click="getMarkerLayer()">获取所有图层</button>
    <initMap />
</template>

<style scoped>
button {
    z-index: 100000000;
    position: fixed;
    left: 300px;
    top: 300px;
    padding: 10px 20px;
    background-color: red;
}
</style>