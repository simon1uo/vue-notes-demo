<template>
  <h2>我是About的内容</h2>

</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log('About组件挂载完毕', this)
    window.aboutRouter = this.$router
    window.aboutRoute = this.$route

  },
  beforeDestroy() {
    console.log('About组件即将被销毁')
  }
}
</script>

