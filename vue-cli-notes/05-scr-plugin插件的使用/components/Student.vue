<template>
  <div>
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <input type="text" v-fbind:value="name">
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

</style>
