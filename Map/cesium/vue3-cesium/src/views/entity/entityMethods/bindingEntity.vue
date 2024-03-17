<script setup>
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
let viewer
onMounted(() => {
    viewer = inject('$viewer')

    // 绑定实体
    // viewer.trackedEntity = entity

    // -----------------------------------------------------------------------------------------------------------------------------------
    
    // 解绑实体
    // viewer.trackedEntity = undefined
})
</script>

<template>
    <home />
</template>