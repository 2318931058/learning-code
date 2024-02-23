import { ref, computed } from 'vue'
// 3. 引入仓库
import { defineStore } from 'pinia'
// 4. 仓库名称和hook类似：第一个参数一般与文件名相同
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const num = ref(20)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  // 导出仓库中的变量/方法/属性等
  return { count, num, doubleCount, increment }
})
