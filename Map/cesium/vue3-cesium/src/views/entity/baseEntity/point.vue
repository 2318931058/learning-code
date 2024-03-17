<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 1000000)
    
    // 方式一：
    // const point = new Cesium.Entity({
    //     id: 'point' + Date.now(),
    //     position: cartesian3,                       // 实体位置，坐标为世界坐标
    //     point: {                                    
    //         color: Cesium.Color.BLUE,               // 填充颜色，默认为白色
    //         pixelSize: 20,                          // 实体大小，默认为一
    //         outlineColor: Cesium.Color.YELLOW,       // 轮廓颜色，默认为黑色
    //         outlineWidth: 10,                       // 轮廓宽度，单位为像素，默认为零
    //     }
    // })
    // viewer.entities.add(point)

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 方式二：
    const point2 = viewer.entities.add({
        id: 'point' + Date.now(),
        position: cartesian3,
        point: {
            color: Cesium.Color.PURPLE,
            pixelSize: 20, 
            outlineColor: Cesium.Color.RED,
            outlineWidth: 10
        }
    })
    viewer.zoomTo(point2)
})
</script>

<template>
    <home />
</template>