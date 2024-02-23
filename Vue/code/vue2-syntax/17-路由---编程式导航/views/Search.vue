<template>
  <div class="search">
    <ul>
      <!-- path传参------------------------------------------------------ -->
      <!-- 1.2 通过$route.query.参数名接收path路径跳转(简写）--query传参  传递过来的数据 -->
      <!-- <li>{{$route.query.key}}</li> -->

      <!-- 2.2 通过$route.query.参数名接收path路径跳转(完整写法）--query传参  传递过来的数据 -->
      <!-- <li>{{$route.query.key}}</li> -->

      <!-- 3.2 通过$route.params.参数名接收path路径跳转(简写)---动态路由传参  传递过来的数据 -->
      <!-- <li>{{$route.params.words}}</li> -->

      <!-- 4.2 通过$route.params.参数名接收path路径跳转(完整写法)---动态路由传参  传递过来的数据 -->
      <!-- <li>{{$route.params.words}}</li> -->


      <!-- name传参--------------------------------------------------------------------------- -->
      <!-- 5.2 通过$route.query.参数名接收name命名路由跳转--query传参  传递过来的数据  -->
      <!-- <li>{{$route.query.key}}</li> -->

      <!-- 6.2  通过$route.params.参数名接收name命名路由跳转---动态路由传参  传递过来的数据 -->
      <li>{{$route.params.words}}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyFriend',
  created () {
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