<template>
  <div>
    <UserInfo
      :username="username"
      :userage="userage"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
export default {
  components: { UserInfo },
  data() {
    return {
      username: "张三",
      userage: 18,
      isSingle: true,
      car: {
        brand: "奥迪",
      },
      hobby: ["吃饭", "睡觉", "打豆豆"],
    };
  },
};
</script>

<style scoped>
</style>