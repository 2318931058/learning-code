<script setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue";
import axios from "axios";
// 发送请求直接在setup中发送即可
let location = ref("");
let date = ref("");
let week = ref("");
let weatherCondition = ref("");
let maximumTemperature = ref("");
let miniumTemperature = ref("");
let windDirection = ref("");
let windPower = ref("");
let airQuality = ref("");
let reminder = ref("");
let getData = async () => {
  const res = await axios.get("https://api.vvhan.com/api/weather?city=新乡");
  location.value = res.data.city;
  date.value = res.data.info.date;
  week.value = res.data.info.week;
  weatherCondition.value = res.data.info.type;
  maximumTemperature.value = res.data.info.high;
  miniumTemperature.value = res.data.info.low;
  windDirection.value = res.data.info.fengxiang;
  windPower.value = res.data.info.fengli;
  airQuality.value = res.data.info.air.aqi_name;
  reminder.value = res.data.info.tip;
};
getData();

// 获取dom在onMounted之中
let inp = null;
onMounted(() => {
  inp = ref(inp);
  nextTick(() => {
    inp.value.focus();
  });
});

// 销毁实例在onUnmounted之中
let timer = setInterval(() => {
    console.log("销毁实例在onUnmounted之中");
  }, 3000);
onUnmounted(()=>{
  clearInterval(timer)
})
</script>

<template>
  <div>
    <h3>在setup中直接发送请求</h3>
    <div class="weather">
      <p>城市：{{ location }}</p>
      <p>日期：{{ date }}</p>
      <p>星期：{{ week }}</p>
      <p>
        天气状况：{{ weatherCondition }}---{{ maximumTemperature }}---{{
          miniumTemperature
        }}
      </p>
      <p>风：{{ windDirection }}{{ windPower }}</p>
      <p>空气质量：{{ airQuality }}</p>
      <p>提示：{{ reminder }}</p>
    </div>
    <br /><br />

    <!-- 获取dom在onMounted之中 -->
    <input type="text" ref="inp" />
    <br /><br />
  </div>
</template>

<style scoped>
.weather {
  width: 300px;
  padding: 5px 10px;
  margin: 20px 40px 20px 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px red;
  background-color: rgb(92, 238, 238);
  opacity: 0.5;
}
input {
  padding: 5px 10px;
}
</style>
