<template>
  <h1>🥲 Profile</h1>
  first name: <input type="text" v-model="person.firstName">
  last name: <input type="text" v-model="person.lastName">
  <h3>full name: <input type="text" v-model="person.fullName"></h3>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'Demo',
  /*computed: {
    fullName() {
      return this.person.firstName + '-' + this.person.lastName
    }
  },*/
  setup() {
    // 数据属性
    let person = reactive({
      firstName: 'Simon',
      lastName: 'Luo',
    })

    // 计算属性（简写只读）
    /*person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })*/

    // 计算属性（完整写法）
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {
      person
    }

  },
}
</script>

