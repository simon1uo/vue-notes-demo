<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  components:{School},
  data(){
    return {
      msg: 'Welcome To Vue World'
    }
  },
  methods: {
    showDOM(){
      console.log(this.$refs.title) // 打印真实的DOM元素
      console.log(this.$refs.btn) // 打印真实的OM元素
      console.log(this.$refs.sch) // School组件的实例对象（vc）
    }
  }
}
</script>

<style scoped>

</style>
