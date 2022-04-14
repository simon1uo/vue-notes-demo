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
  // Vue2中监听配置
  /*watch: {
    // 简写形式
    /!*sum(newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }*!/

    // 完整形式
    /!*sum: {
      immediate: true, // 立即监听
      deep: true, // 深度监听
      handler(newValue, oldValue) {
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
      }
    }*!/
  },*/
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: 'simon',
      age: 3,
      job: {
        j1: {
          salary: 10
        }
      }
    })

    // 监视函数1 监视ref定义的响应式数据
    /*watch(sum, (newValue, oldValue)=>{
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }, {immediate: true})*/

    // 监视函数2 监视ref所定义的多个响应式数据
    /*watch([sum, msg], (newValue, oldValue)=>{
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    })*/

    // 监视函数3 监视一个对象（常用）
    // 使用reactive定义无法获取oldValue
    /*watch(person, (newValue, oldValue) => {
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
    }, {deep: false})*/

    // 监视函数4 监视reactive定义的对象中的某一个属性
    /*watch(() => person.age, (newValue, oldValue) => {
      console.log('newValue', newValue)
    }, {immediate: true, deep: false})*/

    // 监视函数5 监视reactive定义的对象的某些属性
    /*watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log('newValue', newValue)
    }, {deep: false})*/

    // 监视函数特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
    }, {deep: true}) // 由于监视的是reactive定义的对象中的某个属性，所以deep配置有效

    return {
      sum,
      msg,
      person
    }
  },
}
</script>

