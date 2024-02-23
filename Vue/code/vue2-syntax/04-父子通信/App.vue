<template>
  <!-- 1-x表示父传子      2-x表示子传父 -->
  <div class="app">
    <h2>父组件</h2>
    <!-- 1-2 给子组件以添加属性的方式传值 -->
    <CommunicationOne :msg="msg"></CommunicationOne>

    <!-- 2-3 父组件模板中监听子组件传递过来的数据/方法 -->
    <CommunicationTwo
      :title="title"
      @changeTitle="handleChange"
    ></CommunicationTwo>
  </div>
</template>

<script>
import CommunicationOne from './components/CommunicationOne.vue'
import CommunicationTwo from './components/CommunicationTwo.vue'
export default {
  components: { CommunicationOne, CommunicationTwo },
  data () {
    return {
      // 1-1 父组件中以函数的形式定义响应式数据
      msg: '工作和娱乐',

      title: '干饭人干饭魂'
    }
  },

  // 2-4 父组件提供处理函数供子组件调用
  methods: {
    handleChange (newValue) {
      this.title = newValue
    }
  }
}
</script>

<style scoped>
.app {
  padding: 5px 20px;
  border: 3px solid black;
}
</style>
