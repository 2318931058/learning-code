<template>
  <!-- 2-x表示子传父 -->
  <div class="sonTwo">
    <h3>子组件：{{ title }}</h3>

    <!-- 2-2 在子组件的模板中定义按钮触发方法 -->
    <button @click="changeFn">修改</button>
  </div>
</template>

<script>
export default {
  props: ['title'],

  methods: {
    // 2-1 在子组件中定义方法，并通过$emit向父组件发生通知
    changeFn () {
      this.$emit('changeTitle', '干饭都是人上人')
    }
  }
}
</script>

<style scoped>
.sonTwo {
  padding: 5px 20px;
  margin: 20px;
  border: 3px solid black;
}
</style>
