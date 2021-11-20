<!--App组件总汇所有组件-->
<template>
  <div>
    <Student name="Simon" :age="20"/>
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    Student
  }
}
</script>
