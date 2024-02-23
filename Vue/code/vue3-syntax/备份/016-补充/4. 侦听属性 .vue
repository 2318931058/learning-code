<script setup>
// 侦听属性
import { ref, watch } from "vue";
// 简写形式----侦听单个
let count = ref(0);
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

// 简写形式---侦听多个
let year = ref(2023);
let month = ref(10);
watch([year, month], (newArr, oldArr) => {
  console.log(newArr, oldArr);
});

// 完整写法---immediate
let weather = ref("晴天");
watch(
  weather,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    immediate: true,
  }
);

// 完整写法---deep
let userInfo = ref({
  name: "张三",
  age: 18,
});
watch(
  userInfo,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  {
    deep: true,
  }
);

// 精确侦听某个属性---只有特定属性发生改变，才会触发回调函数；其余属性发送改变不作出反应；
let personaltime = ref({
  name: "王五",
  time: 20,
});
watch(
  () => personaltime.value.time,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);

</script>

<template>
  <div>
    <h3>简写形式---侦听单个</h3>
    <button @click="count++">{{ count }}</button>
    <br /><br />

    <h3>简写形式---侦听多个</h3>
    <button @click="year++">{{ year }}年</button>
    <button @click="month++">{{ month }}月年</button>
    <br /><br />

    <h3>完整写法---immediate</h3>
    <button @click="weather = '雨天'">{{ weather }}</button>
    <br /><br />

    <h3>完整写法---deep</h3>
    <button @click="userInfo.name = '李四'">name：{{ userInfo.name }}</button>
    <button @click="userInfo.age++">name：{{ userInfo.age }}</button>
    <br /><br />

    <h3>精确侦听某个属性</h3>
    <button @click="personaltime.name = '赵六'">{{ personaltime.name }}</button>
    <button @click="personaltime.time++">{{ personaltime.time }}</button>
    <br /><br />
  </div>
</template>

<style scoped>
button {
  width: 100px;
  height: 50px;
  margin: 20px 40px 20px 10px;
}
</style>
