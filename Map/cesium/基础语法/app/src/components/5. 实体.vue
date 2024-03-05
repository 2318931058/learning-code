<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  const viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })
  // Cesium中直接将实体/要素直接添加到地图中

  // 点实体---写法一
  // const point = new Cesium.Entity({
  //   position:Cesium.Cartesian3.fromDegrees(114,35),   // 笛卡尔坐标
  //   point:{   // 点实体
  //     color:Cesium.Color.BLUE, // 颜色
  //     pixelSize:20    // 像素大小
  //   }
  // })
  // viewer.entities.add(point)

  // 点实体---写法二
  // const point = viewer.entities.add({
  //   id:'point',
  //   position:Cesium.Cartesian3.fromDegrees(114,35,100),   // 笛卡尔坐标
  //   point:{   // 点实体
  //     color:Cesium.Color.GREEN, // 颜色
  //     pixelSize:20,    // 像素大小
  //   }
  // })
  // // viewer.flyTo(point)  // 可以使用viewer.flyTo(实体)飞行到实体所在位置，但不能使用viewer.flyTo(位置)
  // viewer.zoomTo(point) // 可以使用viewer.zoomTo(实体)直接跳转到实体所在位置，但不能使用viewer.zoomTo(位置)

  // 线实体：若要创建带有高度的线，可以使用fromDegreesArrayHeights
  // const polyline = viewer.entities.add({
  //   polyline: {
  //     positions: Cesium.Cartesian3.fromDegreesArray([114, 30, 114, 35,118,30]),// 笛卡尔坐标数组
  //     width: 10, // 线条宽度
  //     material: Cesium.Color.RED // 线条颜色
  //   }
  // })
  // viewer.zoomTo(polyline)

  // 面实体
  // const polygon = viewer.entities.add({
  //   polygon:{
  //     hierarchy:{
  //       positions:Cesium.Cartesian3.fromDegreesArray([114, 30, 114, 35,118,30]),
  //     },
  //     height:100,   // 多边形相对于地面的高度
  //     extrudedHeight:100000,    // 多边形的高度
  //     fill:true,    // 是否填充多边形
  //     material:Cesium.Color.GREENYELLOW,  // 填充颜色，
  //     outline:true,
  //     outlineColor:Cesium.Color.RED,    // 边框颜色，要配合outline:true使用
  //   }
  // })
  // viewer.zoomTo(polygon)

  // 矩形
  // const rectangle = viewer.entities.add({
  //   rectangle:{
  //     coordinates:Cesium.Rectangle.fromDegrees(120,40,130,50),   // 左下角和右上角的坐标
  //     material:'/src/assets/panda.jpg',  // 可以使用图片填充
  //     extrudedHeight:30000
  //   }
  // })
  // viewer.zoomTo(rectangle)

  // 立方体
  // const box = viewer.entities.add({
  //   position:Cesium.Cartesian3.fromDegrees(114,35,100),   // 笛卡尔坐标
  //   box:{
  //     dimensions:new Cesium.Cartesian3(100,200,300),  // 长宽高
  //     material:Cesium.Color.YELLOW,   // 填充颜色
  //     fill:true,  // 是否填充
  //     outline:true,
  //     outlineColor:Cesium.Color.RED,    // 边框颜色，要配合outline:true使用
  //   }
  // })
  // viewer.zoomTo(box)

  // 椭圆柱
  // const ellipse = viewer.entities.add({
  //   position:Cesium.Cartesian3.fromDegrees(114,35),
  //   ellipse:{
  //     semiMajorAxis:500,    // 长半轴
  //     semiMinorAxis:300,    // 短半轴
  //     extrudedHeight:500,   // 椭圆柱高度
  //     material:Cesium.Color.YELLOW,
  //     rotation:Math.PI / 2     // 旋转角度
  //   }
  // })
  // viewer.zoomTo(ellipse)

  // 圆柱/圆锥
  // const cylinder = viewer.entities.add({
  //   position:Cesium.Cartesian3.fromDegrees(114,35),
  //   cylinder:{
  //     topRadius:0,    // 顶部半径
  //     bottomRadius:500,   // 底部半径
  //     length:800,    // 圆柱/锥高度
  //     material:Cesium.Color.GREENYELLOW
  //   }
  // })
  // viewer.zoomTo(cylinder)

  // 广告牌：也就是标注
  // const billboard = viewer.entities.add({
  //   position:Cesium.Cartesian3.fromDegrees(114,35,10),   // 笛卡尔坐标
  //   billboard:{
  //     image:'/src/assets/location.png',
  //     scale:0.3,    // 大小
  //     color:Cesium.Color.RED  // 指定标注颜色
  //   }
  // })
  // viewer.zoomTo(billboard)

  // 文本标注
  // const label = viewer.entities.add({
  //   position: Cesium.Cartesian3.fromDegrees(114, 35, 20),
  //   label: {
  //     text: 'Cesium', // 字体内容
  //     fillColor: Cesium.Color.RED, // 字体颜色
  //     scale: 0.5, // 字体大小
  //     showBackground: true,
  //     backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8), // 背景颜色，必须结合showBackground一同使用
  //     pixelOffset: new Cesium.Cartesian2(0, -50) // 偏移值：左右、上下
  //   }
  // })
  // viewer.zoomTo(label)
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
