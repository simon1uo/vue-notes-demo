<!--App组件总汇所有组件-->
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Student, School
  },
  data() {
    return {
      msg: "Hello Vue",
    }
  }
}
</script>

<style scoped>
.app {
  background-color: lightgrey;
  padding: 5px;
}
</style>
