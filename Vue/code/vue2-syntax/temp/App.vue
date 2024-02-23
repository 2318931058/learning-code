<template>
  <div class="app">
    <h2>自定义指令</h2>
    <h3>自定义指令的值</h3>
    <p v-color="color1">自定义指令的值1</p>
    <p v-color="color2">自定义指令的值2</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  // 3. 自定义指令的值
  directives: {
    // binding.value就是指令的值
    color: {
      // inserted在指令所在的元素（首次）被插入到页面时触发
      inserted (el, binding) {
        el.style.color = binding.value
      },
      // update指令的值修改时触发，提供值变化后dom更新的逻辑
      update (el, binding) {
        el.style.color = binding.value
      }
    }
  }

  // 2. 局部注册自定义指令
  // directives: {
  //   // 指令名：指令的配置项
  //   focus: {
  //     inserted(el) {
  //       el.focus();
  //     },
  //   },
  // },
}
</script>

<style>
</style>
