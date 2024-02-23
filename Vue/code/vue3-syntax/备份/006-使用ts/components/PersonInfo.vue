<script setup lang="ts" name="newPerson">
import {reactive} from 'vue'
// 2. 导入ts文件中的类型
import { type PersonInfoTs, type PersonInfoList } from '../type'

// 3. 使用类型
let Person: PersonInfoTs = {
  name: '张三',
  age: 18,
  isTrue: true
}

// 定义响应式数据建议这样写
let PersonList = reactive<PersonInfoList> ([
  { name: 'peiqi', age: 20, isTrue:false},
  {name:'peideluo', age:29, isTrue:true}
])

</script>

<template>
  <h1>{{ Person.name }}---{{ Person.age }}---{{ Person.isTrue }}</h1>
  <hr />
  <ul>
    <li  v-for="item in PersonList" :key="item.name">{{ item.name }}---{{ item.age }}---{{ item.isTrue }}</li>
  </ul>
</template>
