<script setup lang="ts">
import { reactive,toRaw } from 'vue';
// toRaw的作用是将一个响应式对象变为一个原始对象（不具有响应式）
let personInfo = reactive({
  name:'peiqi',
  age:17
})
const rawPerson = toRaw(personInfo)
function changeToRaw() {
  console.log('personInfo',personInfo)
  console.log('rawPerson',rawPerson)
}

</script>

<template>
  <div>
    <button @click="changeToRaw()">toRaw</button>
  </div>
</template>