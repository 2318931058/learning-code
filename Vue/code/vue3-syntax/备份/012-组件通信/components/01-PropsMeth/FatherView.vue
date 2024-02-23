<script setup lang="ts">
// props用于父子组件通信
import {ref} from 'vue'
import Son from './SonView.vue'

let toy = ref('凹凸曼')
const  getGift = (val:string)=>{
  console.log(`我好喜欢孩子送的${val}呀`)
}


</script>

<template>
  <div>
    <p>父亲给孩子买了个{{ toy }}</p>
    <!-- 1-1. 父组件以属性的形式将数据传递给子组件 -->
    <!-- <Son :toy="toy" /> -->

    <!-- 2-1. 父组件给子组件传递方法 -->
    <Son :toy="toy" :getGift="getGift" />
  </div>
</template>