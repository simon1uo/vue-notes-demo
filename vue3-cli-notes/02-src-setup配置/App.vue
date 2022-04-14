<template>
  <h1>🥲 Profile</h1>
  <h2>Name(from setup()): {{ name }}</h2>
  <h2>Age(from setup()): {{ age }}</h2>
  <h2>Gender(from data()): {{ sex }}</h2>
  <h2>a(from data())：{{ a }}</h2>
  <button @click="sayHello">sayHello (from setup())</button>
  <br>
  <br>
  <button @click="sayWelcome">sayWelcome(from methods)</button>
  <br>
  <br>
  <button @click="test1">logging Vue 2.x data() / methods</button>
  <br>
  <br>
  <button @click="test2">logging Vue 3 setup() </button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  data() {
    return {
      sex: 'Male',
      a: 888
    }
  },
  methods: {
    sayWelcome() {
      alert('Welcome to Vue 3')
    },
    test1() {
      console.log('methods:', this.sex)
      console.log('methods:', this.name)
      console.log('methods:', this.age)
      console.log('methods:', this.sayHello)
    }
  },
  //此处只是测试一下setup，暂时不考虑响应式的问题。
  setup() {
    //数据
    let name = 'Simon'
    let age = 3
    let a = 888 // 与data中的a重复

    //方法
    function sayHello() {
      alert(`hello, this is ${name}, i'm ${age}`)
    }

    function test2() {
      console.log('from setup', name)
      console.log('from setup', age)
      console.log('from setup', sayHello)
      console.log('from setup', this.sex) // undefined
      console.log('from setup', this.sayWelcome) // undefined
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    //返回一个函数（渲染函数）
    // return ()=> h('h1','尚硅谷')
  }
}
</script>

