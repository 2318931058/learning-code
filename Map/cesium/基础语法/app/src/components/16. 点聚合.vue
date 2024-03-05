<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer,data
let toDel = ()=>{
  viewer.dataSources.remove(data)
}
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  // 加载geojson数据
  Cesium.GeoJsonDataSource.load('/src/assets/camera.json').then((res) => {
    data = res
    // 修改默认标注
    res.entities.values.forEach((item) => {
      item.billboard.image = '/src/assets/camera.png'
      item.billboard.scale = 0.1
    })
    viewer.dataSources.add(res)
    viewer.flyTo(res)

    // 设置样式
    const pinBuilder = new Cesium.PinBuilder()
    const pin300 = pinBuilder.fromText('300+', Cesium.Color.RED, 48).toDataURL()
    const pin100 = pinBuilder.fromText('100+', Cesium.Color.ORANGE, 48).toDataURL()
    const pin50 = pinBuilder.fromText('50+', Cesium.Color.YELLOW, 48).toDataURL()
    const pin30 = pinBuilder.fromText('30+', Cesium.Color.GREEN, 48).toDataURL()
    const pin10 = pinBuilder.fromText('10+', Cesium.Color.BLUE, 48).toDataURL()

    // 开启聚合效果
    res.clustering.enabled = true
    res.clustering.pixelRange = 30 // 聚合范围
    res.clustering.minimumClusterSize = 3 // 最新的聚合值
    // 第一个参数是聚合的实体组成的数组，第二个参数是实体
    res.clustering.clusterEvent.addEventListener((clusteredEntities,cluster) => {
      cluster.billboard.show = true
      cluster.billboard.scale = 1.2
      cluster.label.show = false
      
      if (clusteredEntities.length > 300) {
        cluster.billboard.image = pin300
      }else if (clusteredEntities.length > 100) {
        cluster.billboard.image = pin100
      }else if (clusteredEntities.length > 50) {
        cluster.billboard.image = pin50
      }else if (clusteredEntities.length > 30) {
        cluster.billboard.image = pin30
      }else if (clusteredEntities.length > 10) {
        cluster.billboard.image = pin10
      }
    })
  })
})
</script>

<template>
  <button @click="toDel()">删除dataSource</button>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>

<style scoped>
button {
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 100;
  padding: 10px 20px;
}
</style>
