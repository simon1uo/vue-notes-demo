<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button><br/>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudentInfo() {
      axios.get('http://localhost:8080/server1/students').then(
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败', error)
          }
      )
    },
    getCarInfo() {
      axios.get('http://localhost:8080/server2/cars').then(
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败', error)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
