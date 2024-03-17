<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
let viewer
onMounted(() => {
    viewer = inject('$viewer')

    const rectangleInstance = new Cesium.GeometryInstance({
        geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(-140, 30, -100, 35),
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

    let primitives = new Cesium.Primitive({
        geometryInstances: [rectangleInstance, polygonInstance],
        appearance: new Cesium.PerInstanceColorAppearance()
    })
    viewer.scene.primitives.add(primitives)

    // 定位到对应位置
    const position = Cesium.Cartesian3.fromDegrees(-100, 40, 10000000)
    viewer.camera.flyTo({
        destination: position,
        orientation: {
            heading: Cesium.Math.toRadians(0),              
            pitch: Cesium.Math.toRadians(-90),             
            roll: Cesium.Math.toRadians(0)  
        },
        duration: 2
    })

})
</script>

<template>
    <home />
</template>