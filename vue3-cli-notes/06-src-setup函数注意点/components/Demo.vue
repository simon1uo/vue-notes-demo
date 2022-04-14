<template>
  <h1>🥲 Profile</h1>
  <h2 v-show="person.name">Name: {{ person.name }}</h2>
  <h2>Age: {{ person.age }}</h2>

  <button @click="test">触发showHelloMsg</button>
  <slot name="test1">default slot value</slot>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'Demo',
  props: ['msg','school'],
  emits: ['hello'],
  setup(props, context) {
    console.log('---setup---')
    // console.log(this)

    // console.log(props)
    console.log(context)
    // console.log(context.attrs)
    // console.log(context.emit)
    console.log(context.slots)


    let person = reactive({
      name: 'Simon',
      age: 3
    })

    function test(){
      context.emit('hello', 666)
    }

    return {
      person,
      test
    }
  },
  /*beforeCreate() {
    console.log('---beforeCreate---')
  }*/
}
</script>

