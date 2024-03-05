<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer, handler
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false,
    shouldAnimate: true,
    shadows: true
  })

  let position = Cesium.Cartesian3.fromDegrees(114, 30, 300)
  let orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    Cesium.HeadingPitchRoll.fromDegrees(0, 15, 0)
  )
  const entity = viewer.entities.add({
    position,
    orientation,
    model: {
      uri: '/src/assets/Cesium_Air.glb',
      minimumPixelSize: 200, // 模型最小尺寸
      maximunScale: 5000, // 最大比例尺大小
      show: true
    }
  })
  viewer.zoomTo(entity)

  // 粒子系统
  viewer.scene.primitives.add(
    new Cesium.ParticleSystem({
      image: '/src/assets/fire.png',
      imageSize: new Cesium.Cartesian2(20, 20), //尺寸
      startScale: 1.0, //初始大小
      endScale: 4.0, //最后大小
      particleLife: 3.0, ////设置每一个粒子存在的时间
      speed: 5.0, //发射粒子的速度
      // emitter: new Cesium.CircleEmitter(2), // 设置发射器(圆形发射器)
      // emitter: new Cesium.BoxEmitter(new Cesium.Cartesian3(10, 10, 10)),  // 盒子发射器
      // emitter:new Cesium.SphereEmitter(5.0),  // 球形发射器
      emitter: new Cesium.ConeEmitter(Cesium.Math.toRadians(30.0)), // 锥形发射器
      emissionRate: 5, //例子发射数量
      modelMatrix: entity.computeModelMatrix(
        viewer.clock.startTime, //时间控件中的起始时间
        new Cesium.Matrix4() //4*4矩阵数据
      ), //设置位置
      lifetime: 16 //生命期属性为所需的持续时间
      // loop: false,  //只循环一次
    })
  )
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
