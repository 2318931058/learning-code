<script setup>
import { inject, onMounted } from 'vue'
import initMap from '@/views/initMap.vue'
let myMap

// 5.1 创建图层管理器layerManager
let layerManager = new L.FeatureGroup() 

const removeLayer = () => {
    // 方式一：通过图层的remove方法移除某个图层：layer为图层名称：layer.remove()

    // 方式二：通过设置图层的透明度为0实现移除某个图层：layer为图层名称：layer.setOpacity(0)

    // 方式三：通过地图的removeLayer方法移除某个图层：myMap为地图名称, layer为图层名称：myMap.removeLayer(layer)
    
    // 方式四：移除所有图层
    // let allLayers = Object.values(myMap._layers)					                         // 获取所有图层
    // let specificLayers = allLayers.filter(item => item.options.title == "MyMarker")			 // 根据图层的某个属性过滤出特定图层
    // specificLayers.forEach(item=>item.remove())						                         // 遍历删除特定图层

    // 方式五：5.5 图层管理器方式 ：移除图层管理器中的所有图层
    layerManager.clearLayers()	
}

onMounted(() => {
    myMap = inject('$map')                    // 从全局获取map
    myMap.on('click', (event) => { 
        const { lng, lat } = event.latlng
        let marker = L.marker([lat, lng],{
            title:'MyMarker'                    // 创建标记时添加title属性（marker是以图层形式添加，故此处用marker模拟正常图层）
        })
        // myMap.addLayer(marker)           // 移除图层方式五需要注释该条

        
        // 5.2 将需要的图层layer添加到图层管理器中 	
        layerManager.addLayer(marker)	
        // 5.3 将图层管理器添加到地图myMap中
        myMap.addLayer(layerManager)

    })
})


</script>


<template>
    <button @click="removeLayer()">移除图层</button>
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