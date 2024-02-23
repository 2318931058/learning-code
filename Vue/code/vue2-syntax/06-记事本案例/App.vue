<template>
  <div class="app">
    <TodoHeader :list="list" @add="add"></TodoHeader>
    <TodoMain :list="list" @del="del"></TodoMain>
    <TodoFooter
      :list="list"
      @clearAll="clearAll"
      @clearDone="clearDone"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
    };
  },
  methods: {
    // 添加某项任务
    add(val) {
      this.list.push(val);
    },
    // 删除某项任务
    del(id) {
      this.list.forEach((item) => {
        if (item.id == id) {
          this.list = this.list.filter((item) => item.id != id);
        }
      });
    },
    // 删除全部任务
    clearAll() {
      this.list = [];
    },
    // 删除已办事项
    clearDone() {
      this.list = this.list.filter((item) => item.isDone == false);
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("list", JSON.stringify(newVal));
      },
    },
  },
};
</script>

<style scoped>
.app {
  width: 400px;
  padding: 10px 20px;
  margin: 20px auto;
  background-color: #f5f5f5;
}
</style>