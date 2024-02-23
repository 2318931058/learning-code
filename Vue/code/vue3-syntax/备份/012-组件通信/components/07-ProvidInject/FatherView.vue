<script setup lang="ts">
import Son from './SonView.vue'
import {ref, provide} from 'vue'
let toy = ref('凹凸曼')
const changeToy = ()=>{
  toy.value = '迪迦奥特曼'
}
// 使用provide提供的值在其它任意组件都可以使用inject接收：第一个值为标识符，第二个值为数据/方法/数据+方法
// provide('mytoy', toy)
// provide('changeToy', changeToy)
provide('toyContext', {toy,changeToy})
</script>

<template>
  <Son />
</template>