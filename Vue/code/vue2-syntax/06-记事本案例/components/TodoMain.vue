<template>
  <ul class="todoMain" v-if="list.length">
    <li
      class="things"
      v-for="(item, index) in list"
      :key="item.id"
      :class="{ Done: item.isDone == true }"
    >
      <input type="checkbox" v-model="item.isDone" />
      <span class="indexNumber">{{ index + 1 }}. </span>
      <span class="itemThing">{{ item.thing }}</span>
      <button class="delButton" @click="delItem(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    // 删除待办事项
    delItem(id) {
      if (confirm("确认删除？")) this.$emit("del", id);
    },
    // 选中某个待办事项
  },
};
</script>

<style scoped>
/* 中部待办事项 */
.todoMain {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border: 1px dashed #d5cfcf;
}
/* 各项信息 */
.things {
  display: flex;
  padding: 5px;
  margin-top: 10px;
  gap: 10px;
  border-bottom: 1px dashed #d5cfcf;
}
/* 序号 */
.indexNumber {
  flex: 1;
}
/* 名称 */
.itemThing {
  flex: 16;
}
/* 删除按钮 */
.delButton {
  flex: 3;
  border: 1px solid black;
  border-radius: 5px;
}
.delButton:hover {
  font-weight: bold;
  cursor: pointer;
}

/* 任务完成时的样式 */
.Done {
  text-decoration: line-through rgb(255, 0, 0) 3px;
}
</style>