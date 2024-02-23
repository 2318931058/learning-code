<template>
  <div>
    <!-- 1.2：默认插槽： 在使用组件时，组件标签内填入内容 -->
    <DefaultSlot>
      <div>你确认要删除么</div>
    </DefaultSlot>

    <DefaultSlot>
      <p>确认要退出本系统么</p>
    </DefaultSlot>

    <!-- 2.2 后备内容（默认值）：不写内容就显示默认文本，否则就显示填写的内容 -->
    <FallbackContent></FallbackContent>

    <!-- 3.2 具名插槽 -->
    <NamedSlot>
      <!-- template配合v-slot:插槽名称  来分发对应标签 -->
      <template v-slot:title>
        <div>标题</div>
      </template>

      <template v-slot:content>
        <div>内容</div>
      </template>

      <!-- v-slot:插槽名称    可以简写为    #插槽名称 -->
      <template #button>
        <button>取消</button>
        <button>确认</button>
      </template>
    </NamedSlot>

    <!-- 4. 作用域插槽 -->
    <!-- 4.1 组件通信：将数据传递给子组件 -->
    <ScopeSlot :data="list1">
      <!-- 4.5 在template中通过   #插槽名称='变量名'    接收，默认插槽名为default -->
      <template #default="listData">
        <button @click="del(listData.row.id)">删除</button>
      </template>
    </ScopeSlot>

    <ScopeSlot :data="list2">
      <!-- 也可以直接解构 -->
      <template #default="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </ScopeSlot>
  </div>
</template>

<script>
import DefaultSlot from './components/DefaultSlot.vue'
import FallbackContent from './components/FallbackContent.vue'
import NamedSlot from './components/NamedSlot.vue'
import ScopeSlot from './components/ScopeSlot.vue'
export default {
  data () {
    return {
      list1: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 }
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 }
      ]
    }
  },
  methods: {
    del (id) {
      console.log(id)
      this.list1 = this.list1.filter((item) => item.id != id)
    },
    show (row) {
      alert(`姓名：${row.name}；年龄：${row.age}`)
    }
  },
  components: {
    DefaultSlot,
    FallbackContent,
    NamedSlot,
    ScopeSlot
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
