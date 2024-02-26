<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject } from 'vue';
import { gaode_image } from '@/assets/layers.js'
import Layer from 'ol/layer/Layer';
let map
onMounted(()=>{
    map = inject('$map')
})
const addlayer = () => {
    map.addLayer(gaode_image)
}


const removelayer = () => {
    // 方式一：map的removeLayer方法移除图层
    // map.removeLayer(gaode_image)

    // 方式二：layer的setVisible方法控制图层显隐
    // gaode_image.setVisible(false)

    // 方式三：layer的setOpacity方法设置图层透明度
    // gaode_image.setOpacity(0)

    // 方式四：layer的setZIndex方法设置图层的堆叠顺序
    gaode_image.setZIndex(1)
}
</script>

<template>
    <initMap />
    <button class="add" @click="addlayer()">添加图层</button>
    <button class="del" @click="removelayer()">移除图层</button>
</template>

<style scoped>
button {
    padding: 10px 20px;
    position: fixed;
    left: 100px;
    background-color: red;
}
.add {
    top: 300px;
}
.del {
    top: 200px;
}
</style>