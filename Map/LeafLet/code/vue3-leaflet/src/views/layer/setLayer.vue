<script setup>
import { inject, onMounted } from 'vue'
import initMap from '@/views/initMap.vue'
let myMap
// 创建线图层
let lineLayer = L.geoJSON()
// 定义geojson类型的线数据
let lineData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: [
                    [100, 30],
                    [130, 30],
                ],
            },
            properties: {
                name: "MB",
            },
            id: 1002,
        },
    ],
};
onMounted(() => {
    myMap = inject('$map')                    // 从全局获取map
    // 将数据添加到图层中(layer为图层名称，data为数据）：layer.addData(data)
    lineLayer.addData(lineData)
    // 将图层添加到地图中
    myMap.addLayer(lineLayer)
})

const setLayer = () => {
    lineLayer.setStyle({
        color: 'red',
        weight: '50px'
    })
}

</script>


<template>
    <button @click="setLayer()">设置样式</button>
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