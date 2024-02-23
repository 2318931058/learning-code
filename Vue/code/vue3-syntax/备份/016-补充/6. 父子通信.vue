<script setup>
// 父子通信
import { ref } from "vue";
import parentToChild from "@/components/ComponentCommunication/parentToChild.vue";
import ChildToParent from "@/components/ComponentCommunication/ChildToParent.vue";
// 父传子
let count = ref(0);
let change = () => {
  count.value++;
};

// 子传父
let get = (newVal)=>{
  console.log(newVal)
  count.value = newVal
}
</script>

<template>
  <div class="parent">
    <!-- 父传子 -->
    <button @click="change()">父组件中有：{{ count }}</button>
    <parentToChild :count="count"></parentToChild>

    <!-- 子传父 -->
    <ChildToParent @get="get"></ChildToParent>
  </div>
</template>

<style scoped>
.parent {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background-color: #eee;
}
button{
  padding: 10px 20px;
}
</style>
