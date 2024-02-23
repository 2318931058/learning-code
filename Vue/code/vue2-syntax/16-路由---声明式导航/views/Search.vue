<template>
  <div class="search">
    <!-- 查询参数传参步骤二：在对应页面使用$route.query.参数名  接收传递过来的值 -->
    <!-- <p>搜索关键字: {{ $route.query.key }} </p> -->

    <!--  动态路由传参步骤三：使用$route.params.关键字  接收传递过来的值 -->
    <p>搜索{{$route.params.words}}结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyFriend',
  created () {
    // 查询参数传参步骤三：如果需要发送请求，可以在created中通过this.$route.query.参数名    获取路由参数
    // console.log(this.$route.query.key);

    // 查询参数传参步骤三：如果需要发送请求，可以在created中通过this.$route.params.关键字    获取路由参数
    console.log(this.$route.params.words);
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>