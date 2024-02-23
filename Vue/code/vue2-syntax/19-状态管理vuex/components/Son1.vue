<template>
    <div class="box">
      <!-- 通过原生方法获取state中的数据 -->
      <h2>Son1 子组件---{{ $store.state.title }}---{{ $store.state.count }}</h2>

      <!-- 通过原生方法获取getters中的数据 -->
      <h2>{{$store.getters.filterList}}</h2>

      <hr />
      <!-- 通过原生方法调用vuex中的同步函数 -->
      <button @click="add">值 + 1</button>
      <button @click="del">值 - 1</button>

      <!-- 通过原生方法调用vuex中的异步函数 -->
      <button @click="change">1秒后修改标题内容</button>

      <hr />

      <!-- 通过原生方法访问modules中的state中的数据---$store.state.模块名.xxx -->
      <p>{{ $store.state.students.studentInfo.name }}</p>
      <p>{{ $store.state.students.studentInfo.age }}</p>

      <!-- 通过原生方法访问modules中getters中的数据---$store.getters['模块名/xxx'] -->
      <p>{{ $store.getters['students/addAge'] }}</p>

      <!-- 通过原生方法调用modules中mutations中的同步方法 -->
      <button @click="delAge">修改年龄</button>

      <!-- 通过原生方法调用modules中actions中的异步方法 -->
      <button @click="changeName">一秒后修改姓名</button>

    </div>
  </template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    // 通过原生方法调用vuex中的同步函数
    // this.$store.commit的第一个参数为vuex中的函数名，第二个参数为传递过去的参数值(只能传递一个参数)---传递多个数据可以改写为对象/数组形式
    add () {
      this.$store.commit('addCount', 1)
    },
    del () {
      this.$store.commit('delCount', 1)
    },
    // 通过原生方法调用vuex中的异步函数
    change () {
      // 通过this.$store.dispatch('actions中函数名',传递的参数)调用异步action的函数
      this.$store.dispatch('changeTitleAction', '小标题')
    },

    // 通过原生方法调用modules中mutations中的同步方法：this.$store.commit('模块名/xxx', 传递的参数)
    delAge () {
      this.$store.commit('students/changeAgedel', 5)
    },
    // 通过原生方法调用modules中actions中的异步方法：this.$store.dispatch('模块名/xxx', 传递的参数)
    changeName () {
      this.$store.dispatch('students/changeNameeAction', '浪花淘尽英雄')
    }
  }
}
</script>

  <style lang="css" scoped>
  .box{
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>
