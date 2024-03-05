<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer, handler, arr
// let toDel = ()=>{
//   // 移除事件
//   handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
// }
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    clampToGround: true,//开启贴地
  })

  /*
    1. 使用ScreenSpaceEventHandler在用户在屏幕上操作触发指定处理程序
    2. ScreenSpaceEventHandler.setInputAction()监听用户行为类型ScreenSpaceEventType,并运行一个特定的函数
  */

  // 加载墨尔本
  const melbourneTileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(69380)
    })
  )
  viewer.zoomTo(melbourneTileset)

  // 声明事件---拾取点击位置坐标
  // handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  // // 设置事件
  // handler.setInputAction((evt) => {
  //   // 获取点击位置坐标
  //   let position = viewer.scene.pickPosition(evt.position)
  //   // 判断是否在添加的图层上：Cesium.defined(位置)用于判断是否在添加的图层上
  //   if (Cesium.defined(position)) {
  //     // 创建点实体
  //     viewer.entities.add({
  //       position,
  //       point: {
  //         color: Cesium.Color.BLUE,
  //         pixelSize: 20
  //       }
  //     })
  //   }
  // }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  // 创建点实体
  // const pointFeature = viewer.entities.add({
  //   position: new Cesium.Cartesian3(-4130309.131935929, 2897871.8731010663, -3888714.5726604187),
  //   point: {
  //     color: Cesium.Color.BLUE,
  //     pixelSize: 20
  //   }
  // })
  // // 声明事件---拾取要素
  // handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  // // 设置事件
  // handler.setInputAction((evt) => {
  //   // 拾取要素
  //   let pickFeature = viewer.scene.pick(evt.position)
  //   // 根据id是否存在判断是否存在要素:pickFeature.id是实体
  //   if (pickFeature.id) {
  //     pointFeature.point.color = Cesium.Color.RED
  //   }
  // }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  // 练习：左键单击画线、右键单击结束绘制
  arr = []
  let polylineFeature = viewer.entities.add({
    polyline: {
      positions: [],
      width: 10,
      material: Cesium.Color.RED
    }
  })
  handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction((evt) => {
    let position = viewer.scene.pickPosition(evt.position)
    if (Cesium.defined(position)) {
      arr.push(position)
      polylineFeature.polyline.positions = arr
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  handler.setInputAction(() => {
    arr.forEach((item) => {
      viewer.entities.remove(item)
    })
    arr = []
    handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    alert('结束绘制')
  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
})
</script>

<template>
  <!-- <button @click="toDel()">销毁点击事件</button> -->
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
