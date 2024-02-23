<script setup lang="ts">
import { defineProps, ref } from 'vue';
let tea = ref('大红袍')
// 1-2. 子组件接收父组件传递过来的数据
defineProps(['toy','getGift'])
</script>

<template>
  <div>
    <p>孩子接收到父亲买的{{ toy }}，并孝敬父亲一罐{{ tea }}</p>

    <!-- 2-2. 子组件可以直接调用父组件的方法（需要先使用defineProps进行接收） -->
    <button @click="getGift(tea)">父亲得到孩子礼物的反应</button>
  </div>
</template>