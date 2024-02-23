import {ref} from 'vue'

export default function(){
  const age = ref(10)
  const changeAge = ()=>{
    age.value += 5
  }
  return {age, changeAge}
}