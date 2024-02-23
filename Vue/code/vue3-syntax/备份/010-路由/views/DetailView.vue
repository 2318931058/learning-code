<template>
  <ul class="news-list">
    <!-- query传参---用参 -->
    <!-- <li>编号：{{route.query.id}}</li>
    <li>标题：{{route.query.title}}</li>
    <li>内容：{{route.query.content}}</li> -->

    <!-- params传参---用参 -->
    <!-- <li>编号：{{route.params.id}}</li>
    <li>标题：{{route.params.title}}</li>
    <li>内容：{{route.params.content}}</li> -->


    <!-- 添加props属性后可以更加方便地使用参数 -->
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts">
// query传参---接参
// import {useRoute} from 'vue-router'
// const route = useRoute()
// console.log(route.query)

// params传参---接参
// import {useRoute} from 'vue-router'
// const route = useRoute()
// console.log(route.params)

// 添加props属性后可以不需要引入useRoute等，直接使用defineProps即可
defineProps(['id','title','content'])

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>