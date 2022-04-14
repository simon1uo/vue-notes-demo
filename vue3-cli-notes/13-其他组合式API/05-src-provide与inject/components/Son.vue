<template>
  <div class="son">
    <h3>我是Son（孙）组件</h3>
    {{ car.name }} / {{ car.price }}
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Son",
  setup() {
    let car = inject('car')
    console.log(car)

    return {car}
  }
}
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
