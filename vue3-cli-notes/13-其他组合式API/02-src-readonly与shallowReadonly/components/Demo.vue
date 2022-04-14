<template>
  <h1>🥲 Profile</h1>
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <h2>Salary: {{ job.j1.salary }}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">age++</button>
  <button @click="job.j1.salary++">salary++</button>

  <hr>
  <h2>当前的x.y值为 {{ sum }}</h2>
  <button @click="sum++">sum++</button>
</template>

<script>
import {reactive, ref, toRefs, readonly, shallowReadonly} from "vue";

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: 'simon',
      age: 3,
      job: {
        j1: {salary: 10}
      }
    })
    // person = readonly(person) // readonly接收响应式数据,重新返回一个只读的数据
    person = shallowReadonly(person) // 浅层时只读，深度可读

    let sum = ref(0)

    return {
      ...toRefs(person),
      sum
    }
  },
}
</script>

