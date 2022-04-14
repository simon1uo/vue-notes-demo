<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import {ref, customRef} from "vue";

export default {
  name: 'Demo',
  setup() {
    // let keyword = ref('hello') // 使用Vue提供的ref

    // 自定义一个ref
    function myRef(value, delay) {
      let timer
      // console.log('myRef', value)
      return customRef((track, trigger) => {
        return {
          // 类似计算属性get/set
          get() {
            console.log(`read from myRef, value: ${value}`)
            track() // 通知Vue追踪value的变化（告诉Vue）
            return value
          },
          set(newValue) {
            console.log(`modify in myRef, after Modified Value: ${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知Vue重新解析模版
            }, delay)
          },
        }
      })
    }

    let keyword = myRef('hello', 500) // 使用自定义ref


    return {keyword}
  },
}
</script>

