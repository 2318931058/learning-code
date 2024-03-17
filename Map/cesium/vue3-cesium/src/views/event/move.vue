<script setup>
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
import * as Cesium from 'cesium/Source/Cesium'

let viewer

function addData() {
    const newYorkTileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
            url: Cesium.IonResource.fromAssetId(75343)
        })
    )
    viewer.flyTo(newYorkTileset)
}

onMounted(() => {
    viewer = inject('$viewer')

    addData()

    let lastPick

    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    
    handler.setInputAction((evt) => {
        // 拾取要素:与点击事件有所不同
        let pick = viewer.scene.pick(evt.endPosition)
        // pick就是获取到的实体
        if (pick) {
            if (lastPick) {
                lastPick.color = Cesium.Color.WHITE
            }
            pick.color = Cesium.Color.PURPLE
            lastPick = pick
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
})
</script>

<template>
    <home />
</template>