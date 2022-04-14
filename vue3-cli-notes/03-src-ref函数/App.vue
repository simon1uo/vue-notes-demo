<template>
  <h1>🥲 Profile</h1>
  <h2>Name: {{ name }}</h2>
  <h2>Age: {{ age }}</h2>
  <button @click="changeInfo">changeInfo</button>
  <hr>
  <h1>job</h1>
  <h2> type: {{ job.type }}</h2>
  <h2> salary: {{ job.salary }}</h2>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    let name = ref('Simon')
    let age = ref(18)

    // 对象
    let job = ref({
      type: 'fontEnd',
      salary: '50k'
    })

    function changeInfo() {
      // name = 'Nomis'
      // age = 1
      console.log('name', name, 'age', age)

      name.value = 'Nomis'
      age.value = 1

      console.log('job', job)
      // 修改对象数据
      job.value.type = 'UI'
      job.value.salary = '40k'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

