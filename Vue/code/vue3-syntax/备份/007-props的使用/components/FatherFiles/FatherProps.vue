<script setup lang="ts">
// 父子组件通信---props
import {reactive} from 'vue'

import SonProps from '@/components/SonFiles/SonProps.vue'

import { type PersonInfoList } from '@/type/index'

let PersonList = reactive<PersonInfoList>([
  { name: 'peiqi', age: 20, isTrue:false},
  {name:'peideluo', age:29, isTrue:true}
])

</script>

<template>
  <!-- 1. 将父组件的数据以属性的方式传递给子组件 -->
  <SonProps :PersonList="PersonList"></SonProps>
</template>