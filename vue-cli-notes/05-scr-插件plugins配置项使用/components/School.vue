<template>
  <div>
    <h1>学校信息</h1>
    <h2>name: {{ name | mySlice }}</h2>
    <h2>address: {{ address }}</h2>
    <button @click="test">点我测试hello方法</button>
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
  }, methods:{
    test(){
      this.hello()
    }
  }
}
</script>

<style scoped>

</style>