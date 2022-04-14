<template>
  <h1>🥲 Profile</h1>
  {{ person }}
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <h2>Salary: {{ job.j1.salary }}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">age++</button>
  <button @click="job.j1.salary++">salary++</button>

  <hr>
  <h2>当前的x.y值为 {{ x.y }}</h2>
  <button @click="x.y++">x.y++</button>
  <button @click="x={y:888}">x={y:888}</button>
</template>

<script>
import {reactive, ref, toRefs, shallowReactive, shallowRef} from "vue";

export default {
  name: 'Demo',
  setup() {
    // let person = shallowReactive({ // 只考虑第一层数据的定义
    let person = reactive({
      name: 'simon',
      age: 3,
      job: {
        j1: {salary: 10}
      }
    })

    let x = shallowRef({
      y: 0
    })
    console.log(x)


    return {
      person,
      /*name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary')*/
      ...toRefs(person),
      x
    }
  },
}
</script>

