<template>
  <div class="userInfo">
    <h3>我是个人信息组件</h3>
    <p>姓名：{{ username }}</p>
    <p>年龄：{{ userage }}</p>
    <p>是否单身：{{ isSingle ? "是" : "否" }}</p>
    <p>座驾：{{ car.brand }}</p>
    <p>兴趣爱好：{{ hobby.join("、") }}</p>
  </div>
</template>

<script>
export default {
  props: ['username', 'userage', 'isSingle', 'car', 'hobby'],
  // props校验：为组件的prop指定验证要求，不符合要求，控制台就会有错误提示，帮助开发者快速发现错误。
  props: {
    // 类型校验(基础写法)
    username: String,
    // 完整写法(类型校验、非空校验、默认值校验、自定义校验)
    userage: {
      type: Number,
      // 非空校验：一般不与默认值连用
      //   required: true,
      //  默认值校验：一般不与非空连用
      default: 20,
      //   自定义校验:value为传过来的值
      validator (value) {
        // 自定义校验逻辑:return false为未通过校验
        if (value > 0 && value < 100) return true // 判断年龄是否在[1,100]之间
        console.error('未通过自定义校验') // 可以自定义错误提示
        return false
      }
    },
    isSingle: Boolean,
    car: Object,
    hobby: Array
  }
}
</script>

<style scoped>
.userInfo {
  width: 300px;
  border: 3px solid black;
  padding: 20px;
}
</style>
