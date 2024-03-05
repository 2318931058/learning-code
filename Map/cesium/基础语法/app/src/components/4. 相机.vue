<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  const viewer = new Cesium.Viewer('cesiumContainer')

  const position = Cesium.Cartesian3.fromDegrees(114, 35, 10000) // 创建笛卡尔坐标

  // camera.setView方法用于快速切换相机的位置(目的地)destination与方向orientation
  // viewer.camera.setView({
  //   destination:position, // 可以用笛卡尔坐标
  //   orientation:{       //默认放行（0，-90，0）
  //     heading:Cesium.Math.toRadians(0),   // heading为偏航角y，摇头
  //     pitch:Cesium.Math.toRadians(-90),   // pitch俯仰角x，点头
  //     roll:Cesium.Math.toRadians(0)   // roll旋转角z，歪头
  //   }
  // })

  // camera.flyTo是带有飞行动画的setView
  // 可以使用viewer.flyTo(实体)飞行到实体所在位置，但不能使用viewer.flyTo(位置)
  // 可以使用viewer.zoomTo(实体)直接跳转到实体所在位置，但不能使用viewer.zoomTo(位置)
  // zoomTo可以跳实体、dataSource、promise
  viewer.camera.flyTo({
    destination: position,
    orientation: {
      heading: Cesium.Math.toRadians(0), // heading为偏航角y，摇头
      pitch: Cesium.Math.toRadians(-90), // pitch俯仰角x，点头
      roll: Cesium.Math.toRadians(0) // roll旋转角z，歪头
    },
    duration:3    // 飞行时间
  })

  // camera.lookAt是将视角固定在设置的地点处，可以任意旋转视角，但不能改变位置；
  // viewer.camera.lookAt(position,new Cesium.HeadingPitchRange(
  //   Cesium.Math.toRadians(0),
  //   Cesium.Math.toRadians(-90),
  //   100    // 中心点距离地面的距离
  // ))
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
