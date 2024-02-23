<template>
  <div class="base-a">
    <h2>BaseC</h2>
    <input type="text" :value="value" @input="change" />
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
    change(e) {
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