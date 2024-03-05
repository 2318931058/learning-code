<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
let viewer
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc'
  viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false,
    selectionIndicator: false
  })

  // entity是调用primitive的封装：调用方便、封装完美
  // primitive由geometry（几何形状）和appearance（外观）组成，可以绘制高级图形；
  // primitive更接近底层，图形多的时候建议使用primi

  // 官网第一个示例：单个图形
  // const primitive = new Cesium.Primitive({
  //   geometryInstances: new Cesium.GeometryInstance({
  //     geometry: new Cesium.EllipseGeometry({
  //       // EllipseGeometry表示椭圆
  //       center: Cesium.Cartesian3.fromDegrees(-100.0, 20.0),
  //       semiMinorAxis: 500000.0,
  //       semiMajorAxis: 1000000.0,
  //       rotation: Cesium.Math.PI_OVER_FOUR,
  //       vertexFormat: Cesium.VertexFormat.POSITION_AND_ST
  //     })
  //   }),
  //   appearance: new Cesium.EllipsoidSurfaceAppearance({
  //     material: new Cesium.Material({
  //       fabric: {
  //         type: 'Color',
  //         uniforms: {
  //           color: new Cesium.Color(1.0, 1.0, 0.0, 1.0)
  //         }
  //       }
  //     })
  //   })
  // })
  // viewer.scene.primitives.add(primitive)

  // 官网第二个示例：组合图形
  const rectangleInstance = new Cesium.GeometryInstance({
    geometry: new Cesium.RectangleGeometry({
      rectangle: Cesium.Rectangle.fromDegrees(-140.0, 30.0, -100.0, 35.0),
      vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
    }),
    attributes: {
      color: new Cesium.ColorGeometryInstanceAttribute(0.0, 1.0, 1.0, 0.5)
    }
  })
  const polygonInstance = new Cesium.GeometryInstance({
    geometry: new Cesium.PolygonGeometry({
      polygonHierarchy: new Cesium.PolygonHierarchy(
        Cesium.Cartesian3.fromDegreesArray([
        -100.0, 37.0, -100.0, 28.0, -90.0, 32.5
        ])
      )
    }),
    attributes: {
      color: new Cesium.ColorGeometryInstanceAttribute(0.0, 1.0, 1.0, 0.5)
    }
  })

  viewer.scene.primitives.add(
    new Cesium.Primitive({
      geometryInstances: [rectangleInstance,polygonInstance],
      appearance: new Cesium.PerInstanceColorAppearance()
    })
  )
})
</script>

<template>
  <div id="cesiumContainer" style="width: 100vw; height: 100vh; overflow: hidden"></div>
</template>
