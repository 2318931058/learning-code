<script setup lang="ts">

</script>

<template>
  <div>
    <header>
      <h1>标题</h1>
      <!-- name属性的值要与v-slot的值相同 -->
      <slot name="c2" />
    </header>

    <main>
      <p>内容</p>
      <slot name="c1" />
    </main>
  </div>
</template>

<style scoped>

</style>