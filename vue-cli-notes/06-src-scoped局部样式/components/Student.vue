<template>
  <div class="test">
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", // 组件名
  data() {
    return {
      msg: 'Hello Student',
      name: 'Simon',
    }
  }
}
</script>

<style scoped>
.test{
  background-color: pink;
}
</style>