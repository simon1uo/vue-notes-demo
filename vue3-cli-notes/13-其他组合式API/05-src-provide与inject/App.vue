<template>
  <div class="app">
    <h3>我是App（祖）组件</h3>
    Car: {{ name }} -- ${{ price }}
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
import {reactive, toRefs, provide} from "vue";

export default {
  name: "App",
  components: {Child},
  setup() {
    let car = reactive({
      name: 'benz',
      price: '40w'
    })
    provide("car", car) // （提供数据名，提供数据），给自己的后台组件传递数据
    return {...toRefs(car)}
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
