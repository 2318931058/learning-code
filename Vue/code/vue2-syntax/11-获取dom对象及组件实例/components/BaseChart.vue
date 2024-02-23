<template>
  <div>
    <h2>获取dom对象</h2>
    <!-- 1. 获取dom元素步骤一：在目标标签上添加ref属性 -->
    <div class="box" ref="myChart">子组件</div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // 2. 获取dom元素步骤二：在mounted中通过this.$refs.xxx获取目标dom元素
    const myChart = echarts.init(this.$refs.myChart);
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style scoped>
.box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
}
</style>