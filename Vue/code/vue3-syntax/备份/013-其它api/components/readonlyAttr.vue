<script setup lang="ts">
// readonly既适用于ref，也适用于reactive
import { ref, readonly } from "vue";
let sum1 = ref(0)
// readonly会根据已有数据创建出一个深度的（包括嵌套属性也不能修改）的不可修改的副本
let sum2 = readonly(sum1)

function changeSum1() {
  sum1.value += 1
}
// function changeSum2() {
//   sum2.value += 1    //sum2是不能修改的
// }
</script>

<template>
  <div class="cont">
    <h2>当前sum1为：{{ sum1 }}</h2>
    <h2>当前sum2为：{{ sum2 }}</h2>
  </div>

  <div class="btn">
    <button @click="changeSum1">点我sum1+1</button>
		<!-- <button @click="changeSum2">点我sum2+1</button> -->
  </div>
</template>