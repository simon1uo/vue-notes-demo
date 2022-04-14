<template>
  <div class="student">
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <button @click="sendStudentName">将StudentName发送给School</button>
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
  },methods:{
    sendStudentName(){
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 5px;
}
</style>
