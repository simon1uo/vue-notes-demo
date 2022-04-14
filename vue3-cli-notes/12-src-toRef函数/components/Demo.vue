<template>
  <h1>🥲 Profile</h1>
  {{ person }}
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <h2>Salary: {{ job.j1.salary }}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">age++</button>
  <button @click="job.j1.salary++">salary++</button>

</template>

<script>
import {reactive, toRef, toRefs} from "vue";

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

    /*const name1 = person.name
    console.log(name1)

    const name2 = toRef(person, 'name')
    console.log(name2)*/

    const x = toRefs(person)
    console.log(x)

    return {
      person,
      /*name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary')*/
      ...toRefs(person)
    }
  },
}
</script>

