<template>
    <div class="box">
      <!-- 通过辅助函数获取state中的数据 -->
      <h2>Son2 子组件---{{ title }}---{{ count }}</h2>
      <!-- 通过辅助函数获取getters中的数据 -->
      <h2>{{ filterList }}</h2>
      <hr />

      <!-- 通过辅助函数调用mutation同步函数 -->
      <button @click="addCount(5)">值 + 5</button>
      <button @click="delCount(5)">值 - 5</button>

      <!-- 通过辅助函数调用getters异步函数 -->
      <button @click="changeTitleAction('大保健')">1秒后修改标题内容</button>

      <hr />

      <!-- 通过辅助函数获取module中的state的数据：默认根级别的映射：mapState(['模块名']) -->
      <p>{{ teachers.teacherInfo.name }}</p>
      <!-- 通过辅助函数获取module中的state的数据：子模块的映射：mapState('模块名'，['xxx'])---需要开启命名空间 -->
      <p>{{ teacherInfo.age }}</p>

      <!-- 通过辅助函数获取module中的getters的数据：子模块的映射：mapGetters('模块名',['xxx'])---需要开启命名空间 -->
      <p>{{ reduceAge }}</p>

      <!-- 通过辅助函数调用modules中的mutations的同步函数：子模块的映射：mapMultations('模块名', ['xxx'])---需要开启命名空间 -->
      <button @click="changeAgeadd(10)">修改年龄</button>

      <!-- 通过辅助函数调用modules中的actions的异步函数：子模块的映射：mapActions('模块名', ['xxx'])---需要开启命名空间 -->
      <button @click="changeNameAction('滚滚长江东逝水')">一秒后修改姓名</button>
    </div>
  </template>

<script>
// 导入辅助函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    // 通过辅助函数获取state中的数据
    ...mapState(['count', 'title']),
    // 通过辅助函数获取getters中的数据
    ...mapGetters(['filterList']),

    // 通过辅助函数获取module中的state的数据
    ...mapState(['teachers']), // 默认根级别的映射：mapState(['模块名'])
    ...mapState('teachers', ['teacherInfo']), // 子模块的映射：mapState('模块名'，['xxx'])---需要开启命名空间

    // 通过辅助函数获取module中的getters的数据
    ...mapGetters('teachers', ['reduceAge']) // 子模块的映射：mapGetters('模块名',['xxx'])---需要开启命名空间
  },
  methods: {
    // 通过辅助函数调用mutation同步函数
    ...mapMutations(['delCount', 'addCount']),
    // 通过辅助函数调用getters异步函数
    ...mapActions(['changeTitleAction']),

    // 通过辅助函数调用modules中的mutations中的同步函数
    ...mapMutations('teachers', ['changeAgeadd']), // 子模块的映射：mapMultations('模块名', ['xxx'])---需要开启命名空间

    // 通过辅助函数调用modules中的actions中的异步函数
    ...mapActions('teachers', ['changeNameAction']) // 子模块的映射：mapActions('模块名', ['xxx'])---需要开启命名空间
  }
}
</script>

  <style lang="css" scoped>
  .box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>
