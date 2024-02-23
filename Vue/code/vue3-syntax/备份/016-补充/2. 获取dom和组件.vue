<script setup>
import { ref, onMounted } from "vue";
import TestCom from '@/components/GetComponent/TestCom.vue'
// 获取dom步骤一：使用ref函数生成一个ref对象
const inpRef = ref(null);

// 获取组件步骤一：使用ref函数生成一个ref对象
const comRef = ref(null)

onMounted(() => {
  // 获取dom步骤三：使用获取到的dom
  inpRef.value.focus();

  // 获取组件步骤三：使用获取到的组件的变量与方法
  console.log(comRef.value.count)
  comRef.value.sayHi()
});


</script>

<template>
  <div>
    <!-- 获取dom步骤二：通过ref表示绑定ref对象到标签 -->
    <input type="text" ref="inpRef" />

    <!-- 获取组件步骤二：通过ref表示绑定ref对象到组件 -->
    <TestCom ref="comRef">获取组件内容</TestCom>
  </div>
</template>

<style scoped>
div{
  width: 200px;
  margin: 20px auto;
}
button{
    padding: 10px 20px;
    margin-top: 20px;
}
</style>
