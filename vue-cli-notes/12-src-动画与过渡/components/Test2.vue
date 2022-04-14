<template>
  <div>
    <hr/>
    <h2>Test2</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="show" appear>
      <h1 v-show="isShow">Hello Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1{
  background-color: lightskyblue;
}

/*进入的起点，离开的终点*/
.show-enter, .show-leave-to{
  transform: translateX(-100%);
}

.show-enter-active, .show-leave-active{
  transition: 0.5s linear;
}

/*进入的终点，离开的起点*/
.show-enter-to, .show-leave{
  transform: translateX(0);
}

</style>

