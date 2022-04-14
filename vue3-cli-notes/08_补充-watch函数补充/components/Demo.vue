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
  <h2>Salary: {{ person.job.j1.salary }}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">age++</button>
  <button @click="person.job.j1.salary++">salary++</button>
</template>

<script>
import {ref, reactive, watch} from "vue";

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = ref({
      name: 'simon',
      age: 3,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    console.log(sum)

    watch(sum, (newValue, oldValue)=>{
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }, {immediate: true})

    console.log(person)
    console.log(person)

    watch(person.value, (newValue, oldValue)=>{
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }, {immediate: true})

    watch(person, (newValue, oldValue)=>{
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }, {immediate: true, deep: true})

    return {
      sum,
      msg,
      person
    }
  },
}
</script>

