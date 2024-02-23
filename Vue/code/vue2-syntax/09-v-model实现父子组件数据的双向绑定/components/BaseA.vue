<template>
  <div class="base-a">
    <h2>BaseA</h2>
    <!-- 1-4 将v-model拆解为:value属性和change事件 -->
    <select :value="selectId" @change="changeId">
      <option value="101">郑州</option>
      <option value="102">西安</option>
      <option value="103">武汉</option>
      <option value="104">合肥</option>
      <option value="105">山东</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    // 1-3接收响应式数据
    selectId: String
  },
  methods: {
    // 向父组件发送修改通知
    changeId (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px dotted #000;
  border-radius: 3px;
  margin: 10px auto;
  padding: 10px;
}
</style>
