<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div>
    <input 
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"  
    >
  </div>
</template>