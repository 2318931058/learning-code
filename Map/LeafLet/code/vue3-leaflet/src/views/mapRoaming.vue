<script setup>
import { inject,  onMounted } from 'vue'
import initMap from '@/views/initMap.vue'
let myMap, lat, lng
onMounted(() => {
    myMap = inject('$map')                    // 从全局获取map
    myMap.on('click', (event) => {            // 给map绑定事件  
        ({ lng, lat } = event.latlng)       // 获取点击位置坐标(lat和lng已声明，故须括号包裹)
        // 地图漫游：map.flyTo([lat, lng], zoom)
        myMap.flyTo([lat, lng], 8)
    })
    
})

const resetBtn = () => {
    myMap.flyTo([34, 114], 4)
}
</script>


<template>
    <button @click="resetBtn()">复位</button>
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