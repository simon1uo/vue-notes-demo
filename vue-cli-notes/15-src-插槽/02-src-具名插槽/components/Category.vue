<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--<ul>
       <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>-->
    <slot name="center">当没有传递具体结构时的默认值</slot>
    <slot name="footer">当没有传递具体结构时的默认值</slot>
  </div>
</template>

<script>

export default {
  name: "Category",
  props: ['listData', 'title'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.category {
  background-color: lightskyblue;
  width: 200px;
  height: 400px;
}

h3 {
  text-align: center;
  background-color: orange;
}
</style>
