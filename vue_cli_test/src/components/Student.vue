<template>
  <div>
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", // 组件名
  data(){
    return{
      name: 'Simon',
      age: 21
    }
  }
}
</script>

<style scoped>

</style>