<script setup lang="ts">
import { reactive, shallowReadonly } from "vue";
let car1 = reactive({
  brand: '奔驰',
  options: {
    color: '红色',
    price: 100
  }
})
let car2 = shallowReadonly(car1)

// shallowReadonly作用与readonly类似，但是只作用于浅层数据
// function changeBrand2() {
//   car2.brand = '宝马'
// }
function changeColor2() {
  car2.options.color = '绿色'
}
function changePrice2() {
  car2.options.price += 10
}
</script>

<template>
  <div class="cont">
    <h2>当前car1为：{{ car1 }}</h2>
		<h2>当前car2为：{{ car2 }}</h2>
  </div>

  <div class="btn">
    <!-- <button @click="changeBrand2">修改品牌(car2)</button> -->
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changePrice2">修改价格(car2)</button>
  </div>
</template>