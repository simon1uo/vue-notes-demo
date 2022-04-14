<template>
  <Demo @hello="showHelloMsg" msg="hello" school="schoolName">
    <template v-slot:test1>
      <h3>slot value from app</h3>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: "App",
  components: {Demo},
  setup(){
    function showHelloMsg(value) {
      if(value){
        alert(`received ${value}`)
      } else {
          showHelloMsg
      }
    }

    return {
      showHelloMsg
    }
  }
}
</script>

<style scoped>

</style>
