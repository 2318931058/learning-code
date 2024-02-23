<script setup lang="ts">
// customRef一般结合hook使用
import useMsgRef from '../hook/index'
// 使用useMsgRef来定义一个响应式数据且有延迟效果
let {msg} = useMsgRef('你好',2000)
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
  </div>
</template>