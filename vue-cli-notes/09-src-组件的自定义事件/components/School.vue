<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>name: {{ name}}</h2>
    <h2>address: {{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>

  </div>
</template>

<script>

export default {
  name: "School", // 组件名
  data() {
    return {
      name: 'ASchool',
      address: 'World'
    }
  }, props: ['getSchoolName'],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school{
  background-color: skyblue;
  padding: 5px;
  margin-top: 5px;
}
</style>
