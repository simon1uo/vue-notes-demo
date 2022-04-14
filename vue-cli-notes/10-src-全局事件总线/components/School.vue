<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>address: {{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School", // 组件名
  data() {
    return {
      name: 'schoolName',
      address: 'schoolAddress'
    }
  }, mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('School receiving ', data)
    })
  }, beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 5px;
}
</style>
