<template>
  <h2>我是About的内容</h2>

</template>

<script>
export default {
  name: "About",
  mounted() {
    /*console.log('About组件挂载完毕', this)
    window.aboutRouter = this.$router
    window.aboutRoute = this.$route*/

  },
  beforeDestroy() {
    // console.log('About组件即将被销毁')
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('name') === 'simon') {
        // document.title = to.meta.title || 'Vue Guard DEMO'
        console.log('enterAbout', to, from, next)
        next()
      } else {
        alert('没有权限')
      }
    } else {
      // document.title = to.meta.title || 'Vue Guard DEMO'
      next()
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('leaveAbout', to, from, next)
    next()
  }
}
</script>

