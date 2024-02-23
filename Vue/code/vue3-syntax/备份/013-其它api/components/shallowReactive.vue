<script setup lang="ts">
import { shallowReactive } from 'vue'
let car = shallowReactive({
  barnd: '奔驰',
  options: {
    color: '红色',
    engine: 'V8'
  }
})
// shallowReactive定义的数据只会使对象的最顶层属性变成响应式的
function changeBrand() {
  car.barnd = '宝马'
}

// shallowReactive定义的数据其内部的嵌套属性不会变成响应式的
function changeColor() {
  car.options.color = '紫色'
}
function changeEngine() {
  car.options.engine = 'V12'
}

</script>

<template>
  <div class="cont">
    <p>品牌：{{ car.barnd }}</p>
    <p>属性：{{ car.options.color }}---{{ car.options.engine }}</p>
  </div>

  <div class="btn">
    <button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
  </div>
</template>


