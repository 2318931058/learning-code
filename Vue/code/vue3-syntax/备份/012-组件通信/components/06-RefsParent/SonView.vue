<script setup lang="ts">
import { ref,defineExpose } from 'vue';
let books = ref(5)
defineExpose({books})
const addHouse = (parent:any)=>{
  parent.houses += 3
}
</script>

<template>
  <div>
    <p>儿---{{ books }}</p>
    <button @click="addHouse($parent)">给父买房</button>
  </div>
</template>