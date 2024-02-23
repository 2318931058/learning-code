// 1. 定义hook逻辑
import { ref } from 'vue'
export default function () {
  const myList = [1, 3, 5, 7, 9]
  const sum = ref(0)
  const getSum = () => {
    sum.value = myList.reduce((sum, item) => sum + item, 0)
  }
  return { myList, sum, getSum }
}