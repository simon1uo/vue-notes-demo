<!--App组件总汇所有组件-->
<template>
  <div class="app">
    <h1>{{ msg }} studentName: {{studentName}}</h1>
    <!--通过父组件给子组件传递函数类型的props实现，子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现，子给父传递数据(通过@或v-on绑定事件写法)-->
    <!--<Student v-on:get="getStudentName"/>-->
    <!--简写：-->
    <!--<Student @get="getStudentName"/>-->

    <!--通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（通过ref写法）-->
    <Student ref="student" @click.native="show"/>

  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Student, School
  },
  data() {
    return {
      msg: "Hello Vue",
      studentName: ''
    }
  },
  methods: {show(){
    alert('you clicked Student component')
    },
    getSchoolName(schoolName) {
      console.log('SchoolName:', schoolName)
    },
    getStudentName(studentName, ...params) {
      console.log('studentName:', studentName, params)
      this.studentName = studentName // 此处的this为App组件实例
    }
  },
  mounted() {
    this.$refs.student.$on('get', this.getStudentName)
    // this.$refs.student.$once('get', this.getStudentName)

    /*this.$refs.student.$on('get', function(studentName, ...params) {
      console.log('studentName:', studentName, params)
      // this.studentName = studentName // 此处的this为Student组件实例（谁触发自定义事件this指向谁）
      console.log(this)
    })*/

    /*this.$refs.student.$on('get', (studentName, ...params)=>{
      console.log('studentName:', studentName, params)
      // this.studentName = studentName // 此处的this为App实例（箭头函数没有自己的this会向外找this，此处向外为mounted()）
      console.log(this)
    })*/
  }
}
</script>

<style scoped>
.app {
  background-color: lightgrey;
  padding: 5px;
}
</style>
