<template>
  <div>
    <h2>Test1</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="show" appear>
      <h1 v-show="isShow">Hello Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  .show-enter-active {
    animation: test 1s;
  }

  .show-leave-active {
    animation: test 1s reverse;
  }

  @keyframes test {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
