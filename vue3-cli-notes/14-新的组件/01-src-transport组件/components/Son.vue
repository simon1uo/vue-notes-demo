<template>
  <div class="son">
    <h3>我是Son（孙）组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog'
import {inject} from "vue";

export default {
  name: "Son",
  components: {Dialog},
  setup() {
  }
}
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
