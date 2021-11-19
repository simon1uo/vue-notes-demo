<!--App组件总汇所有组件-->
<template>
  <div>
    <Student/>
  </div>
</template>

<script>
// 引入组件
// import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    Student
  }
}
</script>
