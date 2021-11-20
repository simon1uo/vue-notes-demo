<template>
  <div>
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", // 组件名
  data() {
    return {
      msg: 'Hello Student'
    }
  }, props: ['name', 'age']
}
</script>

<style scoped>

</style>