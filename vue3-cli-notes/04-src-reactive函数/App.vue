<template>
  <h1>🥲 Profile</h1>
  <h2 v-show="person.name">Name: {{ person.name }}</h2>
  <h2>Age: {{ person.age }}</h2>
  <h2 v-show="person.gender">Gender: {{ person.gender }}</h2>
  <button @click="changeInfo">changeInfo</button>
  <hr>
  <h1>job</h1>
  <h2> type: {{ job.type }}</h2>
  <h2> salary: {{ job.salary }}</h2>
  <h2> a.b.c: {{ job.a.b.c }}</h2>
  <h2>hobby: {{ hobby }}</h2>

  <button @click="addGender">addGender()</button>
  <button @click="deleteName">deleteName()</button>

</template>

<script>
import {ref, reactive} from "vue";

export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: 'Simon',
      age: 3
    })
    // let number = reactive(66) // 不可用

    // 对象
    let job = reactive({
      type: 'fontEnd',
      salary: '50k',
      a: {
        b: {
          c: 111
        }
      }
    })

    // 数组
    let hobby = reactive(['a', 'b', 'c'])

    function changeInfo() {
      // console.log('name', name, 'age', age)
      // name.value = 'Nomis'
      // age.value = 1
      person.name = 'Nomis'
      person.age = 1

      console.log('job', job)
      // 修改对象数据
      job.type = 'UI'
      job.salary = '40k'
      job.a.b.c = 222
      hobby[0] = 'd'
    }

    function addGender() {
      person.gender = 'Male'
    }

    function deleteName(){
      delete person.name
    }

    return {
      person,
      job,
      hobby,
      changeInfo,
      addGender,
      deleteName
    }
  }
}
</script>

