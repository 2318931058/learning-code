<template>
    <div>
      <div class="footer_wrap">
        <!-- 基本使用 -->
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/friend">朋友</router-link>
        <!-- 查询传参 -->
        <router-link to="/home">首页</router-link>
        <!-- 动态路由传参 -->
        <router-link to="/search">搜索页</router-link>
      </div>
      <div class="top">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="less" scoped>
  body {
    margin: 0;
    padding: 0;
  }
  .footer_wrap {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #333;
    color: #ccc;
    
  }
  .footer_wrap a {
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
    
  }
  
  .footer_wrap a:hover {
    background-color: #555;
  }
  // 使用自带的默认类名控制高亮样式
  // a.router-link-active{
  //     background-color: purple;
  //   }
  
  // 使用自定义类名控制高亮样式
  a.active{
    background-color: purple;
  }
  
  
  </style>