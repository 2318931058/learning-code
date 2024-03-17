<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // 椭圆
    const ellipseGeometry = new Cesium.GeometryInstance({
        id: 'ellipse',
        geometry: new Cesium.EllipseGeometry({
            center: Cesium.Cartesian3.fromDegrees(110, 30, 10000),      // 图元中心
            semiMinorAxis: 500000,                                      // 短半轴，以米为单位    
            semiMajorAxis: 1000000,                                     // 长半轴，以米为单位
            rotation: Cesium.Math.PI_OVER_FOUR,                         // 从北方逆时针旋转
            vertexFormat: Cesium.VertexFormat.POSITION_AND_ST,          // 要计算的顶点属性，默认值为VertexFormat.DEFAULT
            height: 500000,                                             // 距离地球表面的距离
        }),
    })
    const ellipseAppearance = new Cesium.EllipsoidSurfaceAppearance({
        material: new Cesium.Material({
            fabric: {
                type: 'Color',
                uniforms: {
                    color: new Cesium.Color(1.0, 1.0, 0.0, 1.0)
                }
            }
        })
    })
    const ellipse = new Cesium.Primitive({
        geometryInstances: ellipseGeometry,
        appearance: ellipseAppearance
    })
    viewer.scene.primitives.add(ellipse)

})
</script>

<template>
    <home />
</template>