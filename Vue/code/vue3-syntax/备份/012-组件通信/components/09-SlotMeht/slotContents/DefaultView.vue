<template>
  <div class="son">
    <h3>插槽内容</h3>
    <!-- 不同的部分使用slot代替 -->
    <slot>此处可以填写默认内容</slot>
  </div>
</template>

<style scoped>
  .son{
    width: 30%;
    border: 1px solid black;
    padding: 5px 10px;
  }
</style>