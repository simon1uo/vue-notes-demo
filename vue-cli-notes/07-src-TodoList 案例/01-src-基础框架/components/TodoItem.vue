<template>
  <li>
    <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)">
    <span>{{ todoObj.title }}</span>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todoObj', 'checkTodo', 'deleteTodo'], // 声明接收todo对象
  methods: {
    handleCheck(id) {
      // 通知App组件将对应的todo对象的值取反
      this.checkTodo(id)
    },
    handleDelete(id) {
      if (confirm("是否删除选择的todo项目？")){
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

li:hover {
  background-color: lightgrey;
}
</style>
