<template>
  <div>
    <h1>当前的求和为： {{$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数据
    }
  },
  methods: {
    increment() {
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      this.$store.commit('SUB', this.n)
    },
    incrementOdd() {
      /*if(this.$store.state.sum % 2){
        this.$store.dispatch('add', this.n)
      }*/
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      /*setTimeout(() => {
            this.$store.dispatch('add', this.n)
          }
          , 700)
    }*/
      this.$store.dispatch('addWait', this.n)
    }
  },
  mounted() {
    // console.log('Count', this)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
