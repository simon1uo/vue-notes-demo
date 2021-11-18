<template>
  <!-- 组件的结构-->
  <div class="demo">
    <h1>学校组件</h1>
    <h2>name: {{ name }}</h2>
    <h2>address: {{ address }}</h2>
    <button @click="showName">点我显示名称</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
/*export default Vue.extend({
  data() {
    // 组件中的data一定要要写成函数式
    return {
      schoolName: 'atguigu',
      address: 'world',
    }
  }, methods: {
    showName() {
      console.log(this.schoolName);
    }
  }
})*/

// 最终简化
export default {
  name: 'School', // 最好与文件名保持一致
  data() {
    // 组件中的data一定要要写成函数式
    return {
      name: 'atguigu',
      address: 'world',
    }
  }, methods: {
    showName() {
      console.log(this.name);
    }
  }
}

// 一个时一般使用默认暴露
// export default school
</script>

<style>
/*  组件的样式*/
.demo {
  background-color: skyblue;
}
</style>