<template>
  <div class="app">
    <h3>我是App（祖）组件</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'

export default {
  name: "App",
  components: {Child},
  setup() {
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
