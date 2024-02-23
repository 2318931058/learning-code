<template>
  <div class="todoHeader">
    <p class="title">记事本</p>
    <div class="top">
      <input
        type="text"
        placeholder="请输入任务"
        class="inputContent"
        v-model.trim="input"
        @keyup.enter="addItem"
      />
      <button class="addButton" @click="addItem()">添加任务</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    // 添加待办事项
    addItem() {
      let thingItem = { id: Date.now(), thing: this.input, isDone: false };
      // 判断是否为空
      if (!this.input) return alert("输入为空");
      // 判断任务是否重复
      let isRepeat = this.list.every((item) => item.thing != this.input);
      if (!isRepeat) {
        this.input = "";
        return alert("任务重复");
      }
      // 添加任务并情况输入框
      this.$emit("add", thingItem);
      this.input = "";
    },
  },
};
</script>

<style scoped>
/* 顶部容器 */
.todoHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
/* 标题 */
.title {
  font-size: 22px;
  letter-spacing: 10px;
  margin-bottom: 10px;
}
.top {
  display: flex;
}
/* 输入框 */
.inputContent {
  padding: 2px 5px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px 0px 0px 10px;
}
/* 添加按钮 */
.addButton {
  height: 35px;
  padding: 5px;
  border: 1px solid black;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
}
.addButton:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>