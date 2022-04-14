<template>
  <ul>
    <li :style="{opacity}">Welcome Vue</li>
    <li>news001</li>
    <input type="text">
    <li>news002</li>
    <input type="text">
    <li>news003</li>
    <input type="text">
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    }
  },
  /*mounted() {
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },

  beforeDestroy() {
    clearInterval(this.timer)
    console.log('News将要被销毁')
  }*/
  activated() {
    console.log('News组件被激活')
    this.timer = setInterval(() => {
      // console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
