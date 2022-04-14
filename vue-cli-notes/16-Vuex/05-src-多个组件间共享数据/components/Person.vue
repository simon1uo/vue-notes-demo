<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h3>上方Count组件的求和结果为：{{sum}}</h3>
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
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    }
    // ...mapState(['personList']),
  },
  methods: {
    add() {
      if (this.name) {
        const personObj = {id: nanoid(), name: this.name}
        // console.log(personObj)
        this.$store.commit("ADD_PERSON", personObj)
        this.name = ''
      } else alert('输入为空！')
    }
  }
}
</script>

<style scoped>

</style>
