<template>
  <div class="todoFooter" v-if="list.length">
    <input type="checkbox" v-model="isAllDone" />
    <span class="total">合计：{{ listLength }}</span>
    <div class="button">
      <button class="clearDone" @click="clearDone">清除已办</button>
      <button class="clearALl" @click="clearAll">清除全部</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    // 清除全部
    clearAll() {
      if (confirm("确认删除全部任务么？")) {
        this.$emit("clearAll");
      }
    },
    // 清除已办
    clearDone() {
      if (confirm("确认删除已办事项么？")) {
        this.$emit("clearDone");
      }
    },
  },
  computed: {
    // 计算任务个数
    listLength() {
      return this.list.length;
    },
    // 全选/全不选
    isAllDone: {
      get() {
        return this.list.every((item) => item.isDone == true);
      },
      set(val) {
        this.list.forEach((item) => (item.isDone = val));
      },
    },
  },
};
</script>

<style scoped>
/* 底部容器 */
.todoFooter {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
/* 合计 */
.total {
  flex: 1;
}
/* 按钮 */
button {
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
}
button:hover {
  font-weight: bold;
  cursor: pointer;
}
.clearDone {
  margin-right: 20px;
}
</style>