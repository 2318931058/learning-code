<script setup lang="ts">
// 任意组件使用mitt都需要先引入
import emitter from '@/components/03-mittMeth/utils/emitter'

// 触发事件
const getoy = ()=>{
  emitter.emit('send-toy', 'abg')
}

</script>

<template>
  <div>
    <button @click="getoy()">触发mitt事件</button>
  </div>
</template>