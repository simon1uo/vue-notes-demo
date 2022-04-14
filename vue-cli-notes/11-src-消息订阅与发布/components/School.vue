<template>
  <div class="school">
    <h1>学校信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>address: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "School", // 组件名
  data() {
    return {
      name: 'schoolName',
      address: 'schoolAddress'
    }
  }, mounted() {/*
    this.$bus.$on('hello', (data) => {
      console.log('School receiving ', data)
    })*/
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布hello消息，hello消息的回调执行了', msgName)
      console.log('School receiving ', data)
    })
  }, beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
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
