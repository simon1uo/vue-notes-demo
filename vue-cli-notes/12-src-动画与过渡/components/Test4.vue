<template>
  <div>
    <hr/>
    <h2>Test4</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__slideInUp"
                      leave-active-class="animate__slideOutUp"
    >
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="!isShow" key="2">Vue</h1>
    </transition-group>

  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "Test4",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: lightskyblue;
}

</style>

