<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'

// 引入封装的工具
import { load3dtiles, update3dtiles } from '@/utils/loadData/load3dTiles'

onMounted(() => {
    let viewer = inject('$viewer')

    // 加载纽约（在线数据需要在官网添加到自己的token中）
    // const newYorkTileset = viewer.scene.primitives.add(
    //   new Cesium.Cesium3DTileset({
    //     url: Cesium.IonResource.fromAssetId(75343)
    //   })
    // )
    // viewer.flyTo(newYorkTileset)

    // 加载墨尔本（在线数据需要在官网添加到自己的token中）
    // const melbourneTileset = viewer.scene.primitives.add(
    //   new Cesium.Cesium3DTileset({
    //     url: Cesium.IonResource.fromAssetId(69380)
    //   })
    // )
    // viewer.flyTo(melbourneTileset)

    // 加载本地文件
    const HeFei = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url:'/src/assets/data/3dTiles/合肥3dtiles/tileset.json'
      })
    )
    viewer.flyTo(HeFei)

    // 使用工具加载3dTile
    // load3dtiles(viewer, '/src/assets/data/3dTiles/大雁塔3dtiles/tileset.json', (tileset) => {
    //     viewer.zoomTo(tileset)
    //     update3dtiles(tileset)
    // })

    // load3dtiles(viewer, '/src/assets/data/3dTiles/模型3dtiles/tileset.json', (tileset) => {
    //     viewer.zoomTo(tileset)
    //     update3dtiles(tileset)
    // })
})
</script>

<template>
    <home />
</template>