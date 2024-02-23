<script setup lang="ts" name="newPerson">
import { type PersonInfoList } from '@/type/index'
// 2. 子组件中接收父组件的数据需要使用defineProps（可引可不引）
import {defineProps, withDefaults} from 'vue'

// 3-1. 情况一：只接收传递过来的值（script中不可用直接接收的值）
// defineProps(['PersonList'])
// console.log(PersonList)   // 报错

// 3-2. 情况二：接收值，并将值保存下来
// let MyPersonList = defineProps(['PersonList'])
// console.log(MyPersonList.PersonList)

// 3-3. 情况三：接收值 + 限制类型(限制的是父组件传递过来的值的类型)
// defineProps<{PersonList:PersonInfoList}>()

// 3-4. 情况四：接收值 + 限制类型(限制的是父组件传递过来的值的类型) + 指定默认值（withDefaults)
withDefaults(defineProps<{PersonList:PersonInfoList}>(),{
  // 设置默认值(父组件不传值就显示默认值)
  PersonList:()=>[{ name: 'fubao', age: 3, isTrue:true}]
})


</script>

<template>
  <div>
    <!-- 4. 模板中使用接收的父组件的数据（模板中使用可以不保存） -->
    <ul v-for="item in PersonList" :key="item.name">
      <li>{{ item.name }}</li>
      <li>{{ item.age }}</li>
      <li>{{ item.isTrue }}</li>
    </ul>
    <!-- 模板中使用保存接收值的情况 -->
    <!-- <ul v-for="item in MyPersonList.PersonList" :key="item.name">
      <li>{{ item.name }}</li>
      <li>{{ item.age }}</li>
      <li>{{ item.isTrue }}</li>
    </ul> -->
  </div>
  
</template>
