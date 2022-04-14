<template>
  <div>
    <h1>当前的求和为： {{ sum }}</h1>
    <h2>当前求和放大10倍后： {{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>

    <h3>school: {{ school }}, subject: {{ subject }}</h3>
    <h3>下方Person组件的总人数为 {{ personList.length }}</h3>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数据
    }
  },
  methods: {
    ...mapMutations({increment: 'ADD', decrement: 'SUB'}), // 对象写法
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}), // 对象写法
  },
  computed: {
    ...mapState(['sum', 'school', 'subject', 'personList']), // 数组写法
    ...mapGetters(['bigSum']) // 数组写法
  },
  /*mounted() {
    const x = mapState({sum: 'sum', school: 'school', subject: 'subject'})
    console.log(x)
  }*/
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
