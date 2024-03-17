<script setup>
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
let viewer

function getViewScope() {

    console.log('需要看api文档')
}

onMounted(() => {
    viewer = inject('$viewer')
})
</script>

<template>
    <home />
    <button @click="getViewScope()">获取当前视图范围</button>
</template>

<style scoped>
    button {
        position: fixed;
        left: 300px;
        top: 200px;
        padding: 10px 20px;
    }
</style>