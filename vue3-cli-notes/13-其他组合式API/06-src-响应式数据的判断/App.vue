<template>

</template>

<script>
import {ref, reactive, toRefs, readonly, isReactive, isRef, isReadonly, isProxy} from "vue";

export default {
  name: "App",
  setup() {
    let car = reactive({
      name: 'benz',
      price: '40w'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(sum))


    return {...toRefs(car)}
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
