<template>
  <button @click="isShowDemo = !isShowDemo">isShowDemo()</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import Demo from './components/Demo'
import {ref} from "vue";

export default {
  name: "App",
  components: {Demo},
  setup() {
    let isShowDemo = ref(true)

    return {
      isShowDemo
    }
  }
}
</script>

<style scoped>

</style>
