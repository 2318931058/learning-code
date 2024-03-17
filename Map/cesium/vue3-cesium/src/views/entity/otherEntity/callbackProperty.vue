<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // CallbackProperty可以生成动态实体
    let lon,
        lat,
        num = 0
    const line = viewer.entities.add({
        polyline: {
            positions: new Cesium.CallbackProperty(() => {
                num += 0.005
                lon = 120 + num
                lat = 30 + num
                if (lon < 121) {
                    return Cesium.Cartesian3.fromDegreesArray([120, 30, lon, lat])
                } else {
                    // 给position重新赋值，跳出CallbackProperty循环
                    line.polyline.positions = Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 31])
                }
            }, false), // 必须传递false
            width: 10,
            material: Cesium.Color.YELLOW
        }
    })
    viewer.zoomTo(line)
})
</script>

<template>
    <home />
</template>