<template>
  <div class="app">
    <!-- 表单元素绑定 -->
    <!-- 1-2 向子组件传递响应式数据 -->
    <!-- <BaseA :selectId="selectId" @change="selectId = $event"></BaseA> -->
    <!-- 1-5 监听通知进行修改 -->
    <BaseA :selectId="selectId" @change="change"></BaseA>

    <!-- v-model简化代码 -->
    <!-- 2-1 v-model绑定 -->
    <BaseB v-model="selectId"></BaseB>

    <!-- 封装input -->
    <BaseC v-model="selectId"></BaseC>
  </div>
</template>

<script>
import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'
import BaseC from './components/BaseC.vue'
export default {
  provide () {},
  components: {
    BaseA,
    BaseB,
    BaseC
  },
  data () {
    // 1-1 定义响应式数据
    return {
      selectId: '103'
    }
  },
  // 1-5 监听通知，进行修改
  methods: {
    change (e) {
      this.selectId = e
    }
  }
}
</script>

<style>
.app {
  width: 300px;
  height: 900px;
  border: 3px dashed #000;
  border-radius: 3px;
  padding: 20px;
  margin: 10px auto;
}
</style>
