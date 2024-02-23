<script setup lang="ts">
import { shallowRef } from 'vue'
let sum = shallowRef(0)
let person = shallowRef({
  name: '张三',
  age: 18
})
// shallowRef定义的数据只对顶层属性进行响应式处理
function changeSum() {
  sum.value += 1
}
function changePerson() {
  person.value = { name: 'tony', age: 100 }
}

// shallowRef定义的数据不关心值内部的属性变化
function changeName() {
  person.value.name = '李四'
}
function changeAge() {
  person.value.age += 1
}

</script>

<template>
  <div class="cont">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
  </div>

  <div class="btn">
    <button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
  </div>
</template>


