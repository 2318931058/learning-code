<script setup lang="ts">
import Son from './SonView.vue'
// 使用$refs或$parent时需要使用defineExpose将相关数据暴露出去
import { ref,defineExpose } from 'vue';
let houses = ref(10)
defineExpose({houses})

const addBooks = (refs:any)=>{
  // refs获取的是所有的子实例对象，key是每个实例对象的标识符
  for(let key in refs){
    refs[key].books += 3
  }
}
</script>

<template>
  <div>
    <p>父---{{ houses }}套房</p>
    <!-- $refs获取的是所有的子实例对象 -->
    <button @click="addBooks($refs)">儿子多读几本书</button>
    <Son ref="c1" />
  </div>
</template>