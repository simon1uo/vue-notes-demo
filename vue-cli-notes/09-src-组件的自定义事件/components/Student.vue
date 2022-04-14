<template>
  <div class="student">
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>当前的number值为：{{number}}</h2>
    <button @click="addNumber">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑get事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student", // 组件名
  data() {
    return {
      msg: 'Hello Student',
      name: 'Simon',
      number: 0
    }
  }, methods: {
    addNumber(){
      this.number++
      console.log('add回调被调用')
    },
    sendStudentName() {
      // 触发Student组件实例身上的get事件
      this.$emit('get', this.name, 1, 2, 3)
      // this.$emit('click') // 组件默认认为是自定义事件
    },
    unbind(){
      // 解绑一个事件
      this.$off('get')

      // 解绑多个自定义事件
      // this.$off(['get', 'demoEvent'])

      // 解绑所有自定义事件
      // this.$off()
    },
    death(){
      this.$destroy() // 销毁了当前的Student组件的实例，销毁后所有的Student实例的自定义事件全都不奏效
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
