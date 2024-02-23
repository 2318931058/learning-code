<template>
  <div id="app">
    <!-- 使用 -->
    <HeaderView></HeaderView>
    <MainView></MainView>
    <FooterView></FooterView>
  </div>
</template>

<script>
// 导入需要祖册的组件：大驼峰命名法
import HeaderView from "./components/HeaderView.vue";
import MainView from "./components/MainView.vue";
import FooterView from "./components/FooterView.vue";
export default {
  // 局部注册
  // components: {
  //   HeaderView: HeaderView,
  //   MainView: MainView,
  //   FooterView: FooterView,
  // },
  components: { HeaderView, MainView, FooterView },
};
</script>


<style lang='less'>
#app {
  width: 400px;
  height: 500px;
  background-color: pink;
}
</style>