<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 标注
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 10000)
    const billboard = viewer.entities.add({
        position: cartesian3,
        billboard: {
            image: '/src/assets/images/location.png',
            scale: 0.3,                                                      // 大小
            color: Cesium.Color.RED,                                       // 标注颜色
        }
    })
    viewer.zoomTo(billboard)

})
</script>

<template>
    <home />
</template>