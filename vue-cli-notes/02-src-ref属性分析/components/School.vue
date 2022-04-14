<template>
  <div class="school">
    <h2>SchoolName: {{ name }}</h2>
    <h2>SchoolAddress: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: 'schoolName',
      address: 'Guangdong',
    }
  }
}
</script>

<style >
  .school {
    background-color: skyblue;
  }
</style>
