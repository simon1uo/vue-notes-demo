<template>
  <div class="child">
    <h3>我是Child（子）组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'

export default {
  name: "Child",
  components: {Son},
  setup() {
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
