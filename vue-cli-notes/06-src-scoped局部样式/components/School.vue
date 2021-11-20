<template>
  <div class="test">
    <h1>学校信息</h1>
    <h2>name: {{ name | mySlice }}</h2>
    <h2>address: {{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School", // 组件名
  data() {
    return {
      msg: 'Hello Student',
      name: 'ASchool',
      address: 'World'
    }
  }
}
</script>

<style scoped>
.test{
  background-color: skyblue;
}
</style>