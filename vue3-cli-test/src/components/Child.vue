<template>
  <div class="child">
    <h3>我是Child（子）组件</h3>
    sum:{{ sum }}
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Child",
  setup() {
    let sum = ref(0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum)
      }, f3000)
    })
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
