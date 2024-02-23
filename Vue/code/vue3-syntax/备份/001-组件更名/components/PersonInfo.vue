<!-- 1. 全局安装插件：pnpm i vite-plugin-vue-setup-extend -D -->

<!-- 
  2. 修改vite.config.ts文件
  import vueSetupExtend from 'vite-plugin-vue-setup-extend'
  ······
  export default defineConfig({
    plugins:[
      ······
      vueSetupExtend()
    ]
  })
 -->

 <!-- 3. setup语法糖中使用name属性修改组件名称(修改后可在浏览器中通过vue工具查看) -->
<script setup lang="ts" name="newPerson">
  let a = 100
</script>

<template>
  <h1> a = {{ a }}</h1>
</template>
