<template>
  <div class="app">
    <h2>自定义指令</h2>
    <!-- v-xxx就是自定义指令的语法 -->
    <!-- <input type="text" v-focus /> -->

    <!-- 自定义指令的值 -->
    <h3>自定义指令的值</h3>
    <p v-color="color1">自定义指令的值1</p>
    <p v-color="color2">自定义指令的值2</p>

    <!-- 
      1. 封装v-loading指令
      2. 场景：实际开发中，发送请求需要时间，在请求的数据返回之前，页面会处于空白状态。此时可以封装一个v-loading指令，实现加载中的效果
      3. 分析：
        (1). 本质 loading 效果就是一个蒙层，盖在了盒子上
        (2). 数据请求中，开启loading状态，添加蒙层
        (3). 数据请求完毕，关闭loading状态，移除蒙层
      4. 实现：
        (1). 准备一个 loading 类，通过伪元素定位，设置宽高，实现蒙层
        (2). 开启关闭 loading 状态（添加移除蒙层），本质只需要添加移除类即可
        (3). 结合自定义指令的语法进行封装复用
      5. 核心思路：
        (1) 准备类名 loading，通过伪元素提供遮罩层
        (2) 添加或移除类名，实现loading蒙层的添加移除
        (3) 利用指令语法，封装 v-loading 通用指令
        inserted 钩子中，binding.value 判断指令的值，设置默认状态
        update 钩子中，binding.value 判断指令的值，更新类名状态
     -->
    <LoadingView></LoadingView>
  </div>
</template>

<script>
import LoadingView from "./components/LoadingView.vue";
export default {
  components: { LoadingView },
  data() {
    return {
      color1: "red",
      color2: "green",
    };
  },
  // 3. 自定义指令的值
  directives: {
    // binding.value就是指令的值
    color: {
      // inserted在指令所在的元素（首次）被插入到页面时触发
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      // update指令的值修改时触发，提供值变化后dom更新的逻辑
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },

  // 2. 局部注册自定义指令
  // directives: {
  //   // 指令名：指令的配置项
  //   focus: {
  //     inserted(el) {
  //       el.focus();
  //     },
  //   },
  // },
};
</script>

<style>
</style>