<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject } from 'vue';
import axios from 'axios'
// 引入GeoJSON和Style
import GeoJSON from 'ol/format/GeoJSON'
import { Style, Stroke, Fill } from 'ol/style'
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
let map
const addGeoJSONLayer = () => {
    const geoJSONLayer = new VectorLayer({
        source: new VectorSource({
            url: 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
            format: new GeoJSON()
        }),
        style: new Style({
            stroke: new Stroke({
                color: 'red',
                width: 5
            }),
            fill: new Fill({
                color: 'green'
            })
        })
    })
    map.addLayer(geoJSONLayer)
}


onMounted(() => {
    map = inject('$map')
    addGeoJSONLayer()
})
</script>

<template>
    <initMap />
</template>