<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
// 3.1 导入Event bus事件总线
import Bus from "../utils/EventBus";
export default {
  methods: {
    // 发送方通过触发事件的方式传递参数（发布消息）
    sendMsgFn() {
      Bus.$emit("sendMsg", "今天天气不错，适合旅游");
    },
  },
};
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>