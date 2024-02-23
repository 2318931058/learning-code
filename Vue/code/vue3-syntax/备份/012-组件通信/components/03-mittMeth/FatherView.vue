<script setup lang="ts">
import {onUnmounted} from 'vue'
import Son from './SonView.vue'
// 任意组件使用mitt都需要先引入
import emitter from '@/components/03-mittMeth/utils/emitter'

// 绑定事件
emitter.on('send-toy', (val)=>{
  console.log(val)
})


onUnmounted(()=>{
  // 绑定完事件，需要在组件销毁时解绑事件
  emitter.off('send-toy')
})

</script>

<template>
  <Son />
</template>