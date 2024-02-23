<template>
  <div class="main">
    <!-- v-loading自定义指令根据isLoading判断是否展示加载页面 -->
    <div class="box" v-loading="isLoading">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <div class="right">
            <img :src="item.img" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      isLoading: true,
    };
  },
  async created() {
    const res = await axios.get("http://hmajax.itheima.net/api/news");
    // 此处的定时器是为了模仿加载数据的延迟效果
    setTimeout(() => {
      this.list = res.data.data;

      //   更新isLoading的状态
      this.isLoading = false;
    }, 2000);
  },

  //   封装v-loading自定义指令
  directives: {
    loading: {
      inserted(el, binding) {
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
      update(el, binding) {
        binding.value
          ? el.classList.add("loading")
          : el.classList.remove("loading");
      },
    },
  },
};
</script>

<style>
/* 伪类 - 蒙层效果 */
.loading:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url("../assets/loading.gif") no-repeat center;
}

/* .box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
} */

.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>