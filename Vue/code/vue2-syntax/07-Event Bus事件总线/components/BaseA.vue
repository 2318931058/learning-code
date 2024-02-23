<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{ msg }}</p>
  </div>
</template>

<script>
// 2.1 导入Event bus事件总线
import Bus from "../utils/EventBus";
export default {
  data() {
    return {
      msg: "",
    };
  },
  // 2.2 在接收方的created中进行监听bus的事件(订阅消息)
  created() {
    Bus.$on("sendMsg", (msg) => {
      // console.log(msg)
      this.msg = msg;
    });
  },
};
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>