<script setup>
import axios from 'axios'
import { onMounted, inject } from 'vue';
import initMap from '@/views/initMap.vue';
let myMap
const addLayer = async () => {
    const layerData = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    let HeNanLayer = L.geoJSON(layerData.data, {
        color: 'red',
        opacity: 0.3
    })
    myMap.addLayer(HeNanLayer)
    // 为geojson图层绑定鼠标移入事件
    HeNanLayer.on('mousemove', (event) => {
        // 设置鼠标滑过区域样式
        event.layer.setStyle({
            color: 'green'
        })
        // 获取弹窗属性
        const adcode = event.layer.feature.properties.adcode
        const name = event.layer.feature.properties.name
        const level = event.layer.feature.properties.level
        // 添加弹窗
        event.layer.bindPopup(`
              <p>adcode：${adcode}</p>
              <p>name：${name}</p>
              <p>level：${level}</p>
            `).openPopup()
    })
    // 为geojson图层绑定鼠标移除事件
    HeNanLayer.on('mouseout', (event) => {
        // 恢复原有样式
        event.layer.setStyle({
            color: 'red',
            opacity: 0.3
        })
        // 关闭弹窗
        event.layer.bindPopup().closePopup()
    })

}

onMounted(() => {
    myMap = inject('$map')
    addLayer()
})
</script>

<template>
    <initMap />
</template>