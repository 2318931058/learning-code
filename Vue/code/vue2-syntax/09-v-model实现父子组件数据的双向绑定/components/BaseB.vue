<template>
  <div class="base-a">
    <h2>BaseB</h2>
    <!-- 2-4  -->
    <select :value="value" @change="changeId">
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
    // 2-2接收响应式数据
    value: String,
  },
  methods: {
    // 2-3 向父组件发送修改通知
    changeId(e) {
      this.$emit("input", e.target.value);
    },
  },
};
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