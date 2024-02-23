<template>
  <div class="app">
    <!-- 1. 获取dom对象 -->
    <BaseChart></BaseChart>

    <!-- 2. 获取组件实例（及其身上的数据/方法） -->
    <!-- 获取组件步骤一：给目标组件添加ref属性 -->
    <BaseForm ref="myForm"></BaseForm>
    <div>
      <button @click="getForm">获取数据</button>
      <button @click="resetForm">重置数据</button>
    </div>
  </div>
</template>

<script>
import BaseChart from "./components/BaseChart.vue";
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseChart,
    BaseForm,
  },
  methods: {
    // 获取组件步骤二：通过this.$refs.xxx调用目标组件身上的方法/数据
    getForm() {
      this.$refs.myForm.getFormData();
    },
    resetForm() {
      this.$refs.myForm.resetFormData();
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>