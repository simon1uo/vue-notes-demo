<template>
  <div>
    <h1>学生信息</h1>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ myAge + 1 }}</h2>
    <button @click="updateAge">点此更新Age数据（Age++）</button>
  </div>
</template>

<script>
export default {
  name: "Student", // 组件名
  data() {
    return {
      msg: 'Hello Student',
      // myName: this.name,
      myAge: this.age
    }
  },methods:{
    updateAge(){
      this.myAge++
    }
  },
  // 简单声明接收写法
  // props: ['name', 'age']

  // 对象限制类型写法：
  // 数据接收的同时对类型进行限制
  /*props: {
    name: String,
    age: Number
  },*/

  // 完整写法
  // 数据接收的同时对类型进行限制，必要性限制，默认值指定
  props: {
    name:{
      type: String, // 类型
      required: true, // 必须
      default: 'defalutName' // 默认值
    },
    age :{
      type: Number,
      required: true,
      default: 99
    }
  }
}
</script>

<style scoped>

</style>