<template>
  <div class="app">
    <h3>我是App（祖）组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child' // 静态引入
import {defineAsyncComponent} from "vue";

const Child = defineAsyncComponent(() => import('./components/Child')) // 动态（异步）引入

export default {
  name: "App",
  components: {Child},
  setup() {
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
