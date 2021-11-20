<template>
  <div>
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <h3>{{x}}</h3>
    <button @click="showName">点击显示name弹窗</button>
  </div>
</template>

<script>
// import {mixin, mixin2} from "../mixin"; // 局部引入混合
export default {
  name: "Student", // 组件名
  data() {
    return {
      msg: 'Hello Student',
      name: 'Simon',
      x: 666
    }
  },
  // mixins:[mixin, mixin2],
  mounted() {
    console.log('mounted from Student')
  }
}
</script>

<style scoped>

</style>