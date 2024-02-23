<script setup lang="ts">
// 1. vue3中使用计算属性需要先从vue中引入
  import {ref, computed} from 'vue'

  let firstName = ref('')
  let lastName = ref('')

  // 2. 使用计算属性（完整形式）
  let fullName = computed({
    get(){
      // 计算属性具有缓存特性，只有当依赖的变量发生变化时才会重新进行计算
      return firstName.value + lastName.value
    },
    set(newVal){
      firstName.value = newVal.slice(0,1)
      lastName.value = newVal.slice(1)
    }
  })
</script>

<template>
  <div>
    姓：<input type="text" v-model="firstName">
    <br />
    名：<input type="text" v-model="lastName">
    <br />
    姓名：<input type="text" v-model="fullName">
    <br />
  </div>
</template>