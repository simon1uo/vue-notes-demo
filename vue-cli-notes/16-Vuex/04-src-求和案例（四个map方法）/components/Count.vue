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

    <hr>
    <h3>school: {{ school }}, subject: {{ subject }}</h3>
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
    /*increment() {
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      this.$store.commit('SUB', this.n)
    },*/
    ...mapMutations({increment: 'ADD', decrement: 'SUB'}), // 对象写法
    // ...mapMutations(['ADD','SUB']), // 数组写法
    /*incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }*/
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}), // 对象写法
    // ...mapActions(['addOdd', 'addWait']) // 数组写法
  },
  computed: {
    /*sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    subject() {
      return this.$store.state.subject
    },*/
    // ... mapState({sum: 'sum', school: 'school', subject: 'subject'}), // 对象写法
    ...mapState(['sum', 'school', 'subject']), // 数组写法
    /*bigSum() {
      return this.$store.getters.bigSum
    }*/
    // ...mapGetters({bigSum: 'bigSum'}) // 对象写法
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
