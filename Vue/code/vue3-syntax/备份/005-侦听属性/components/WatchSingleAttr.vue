<script setup lang="ts">
/* 
  1. 监视的属性不是引用类型数据需要写为函数形式
  2. 监视的属性是引用类型数据则既可以写为函数形式，也可以写为普通形式，但建议写函数形式
  3. 总结：若监视的属性是应用类型数据，则监视的是地址值；若要关注内部，需要手动开启深度监视！！！

*/

// 1. 监视某个对象中的某个属性需要先从vue中引入watch
import {ref, watch} from 'vue'

let PersonInfo = ref({
  name:'peiqi',
  age:18,
  car:{
    c1:'奔驰',
    c2:'宝马'
  }
})
const changePersonName = ()=>{
  PersonInfo.value.name = 'peideluo'
}
const changePersonCar = ()=>{
  PersonInfo.value.car.c1 = '本田'
}

// 2. 使用watch监视对象中某个属性的变化
watch(()=>PersonInfo.value.name,(newVal, oldVal)=>{
  console.log('监视的属性不是引用类型数据需要写为函数形式',newVal, oldVal)
})
watch(()=>PersonInfo.value.car,(newVal, oldVal)=>{
  console.log('监视的属性是引用类型数据则既可以写为函数形式，也可以写为普通形式，但建议写函数形式',newVal, oldVal)
},{deep:true})

</script>

<template>
  <div>
    <h1>监视某个属性（简单类型）：{{ PersonInfo.name }}</h1>
    <button @click="changePersonName()">监视某个属性（简单类型）</button>

    <h1>监视某个属性（引用类型）：{{ PersonInfo.car.c1 }}</h1>
    <button @click="changePersonCar()">监视某个属性（引用类型）</button>
  </div>
</template>