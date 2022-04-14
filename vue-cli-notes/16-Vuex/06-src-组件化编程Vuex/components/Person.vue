<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加姓王的人</button>
    <button @click="addPersonServer">添加服务器姓名的人</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h3>列表中的第一个人的姓名：{{ firstPersonName }}</h3>
    <h3>上方Count组件的求和结果为：{{ sum }}</h3>

  </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      // return this.$store.state.personList
      return this.$store.state.personOptions.personList
    },
    sum() {
      return this.$store.state.countOptions.sum
    },
    firstPersonName() {
      return this.$store.getters["personOptions/firstPersonName"]
    }
    // ...mapState(['personList']),
  },
  methods: {
    add() {
      if (this.name) {
        const personObj = {id: nanoid(), name: this.name}
        // console.log(personObj)
        this.$store.commit("personOptions/ADD_PERSON", personObj)
        this.name = ''
      } else alert('输入为空！')
    },
    addWang() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch("personOptions/addPersonWang", personObj)
    },
    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonServer")
    }
  }
}
</script>

<style scoped>

</style>
