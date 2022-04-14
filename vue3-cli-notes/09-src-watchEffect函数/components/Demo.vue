<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <hr>
  <h2>msg: {{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h1>🥲 Profile</h1>
  <h2>Name: {{ person.name }}</h2>
  <h2>Age: {{ person.age }}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">age++</button>
</template>

<script>
import {ref, reactive, watch, watchEffect} from "vue";

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: 'simon',
      age: 3,
    })

    /*watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })*/

    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect回调执行')
    })

    return {
      sum,
      msg,
      person
    }
  },
}
</script>

