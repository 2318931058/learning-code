<script setup lang="ts">
import { inject } from 'vue';
// 使用inject接收provide传递的值:第一个参数为标识符，第二个参数为默认值
// inject('mytoy', "泰罗")
// inject('changeToy')
let {toy, changeToy} = inject('toyContext',{toy:'泰罗',changeToy:()=>{}})

</script>

<template>
  <div>
    <p>凹凸曼---{{ toy }}</p>
    <button @click="changeToy()">按钮</button>
  </div>
</template>