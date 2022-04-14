<template>
  <h1>🥲 Profile</h1>
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <h2>Salary: {{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">Car: {{ person.car }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">age++</button>
  <button @click="job.j1.salary++">salary++</button>
  <button @click="showRawPerson">showRawPerson</button>
  <button @click="addCar">addCar</button>
  <button @click="person.car.name+='!'">changeCarName</button>
  <button @click="person.car.price++">changePrice</button>

  <hr>
  <h2>当前的x.y值为 {{ sum }}</h2>
  <button @click="sum++">sum++</button>
</template>

<script>
import {reactive, ref, toRefs, toRaw, markRaw} from "vue";

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: 'simon',
      age: 3,
      job: {
        j1: {salary: 10}
      },
      // car: {}
    })

    function showRawPerson() {
      // console.log(person)
      const p = toRaw(person)
      // p.age++ // 不会引起页面变化
      console.log(p)
    }

    function addCar() {
      let car = {name: 'benz', price: 40} // 此数据为固定数据，直接赋值会变为响应式数据
      person.car = markRaw(car) // car永远不成为响应式数据，只有最原始的数据
    }

    let sum = ref(0)

    return {
      person, // 将整个响应式对象传出去
      ...toRefs(person),
      showRawPerson,
      addCar,
      sum
    }
  },
}
</script>

