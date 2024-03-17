<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'

let viewer, point1, point2
let entitiesList = []

function removePoint() {
    // 方式一：移除指定名称的实体
    // viewer.entities.remove(point1)

    // --------------------------------------------------------------

    // 方式二：移除指定id的实体
    // viewer.entities.removeById('point2')

    // --------------------------------------------------------------

    // 方式三：获取指定id的实体，然后再删除实体
    // const myPoint1 = viewer.entities.getById('point1')
    // viewer.entities.remove(myPoint1)

    // --------------------------------------------------------------

    // 方式四：移除所有实体
    // viewer.entities.removeAll()

    // --------------------------------------------------------------

    // 方式五：移除带有某种特定属性的实体
    entitiesList.forEach((item) => {
        viewer.entities.remove(item)
    })
}

onMounted(() => {
    viewer = inject('$viewer')

    point1 = viewer.entities.add({
        id: 'point1',
        position: Cesium.Cartesian3.fromDegrees(110, 30, 1000000),
        point: {
            color: Cesium.Color.PURPLE,
            pixelSize: 20,
            outlineColor: Cesium.Color.RED,
            outlineWidth: 10
        }
    })
    point2 = viewer.entities.add({
        id: 'point2',
        position: Cesium.Cartesian3.fromDegrees(112, 31, 1000000),
        point: {
            color: Cesium.Color.BLUE,
            pixelSize: 20,
            outlineColor: Cesium.Color.PURPLE,
            outlineWidth: 10
        }
    })

    // 将具有某种特征的实体放进数组
    entitiesList.push(point1)
    entitiesList.push(point2)
})
</script>

<template>
    <home />
    <button @click="removePoint()">删除实体</button>
</template>

<style scoped>
button {
    position: fixed;
    top: 200px;
    left: 300px;
    z-index: 100;
    padding: 10px 20px;
}
</style>