<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="updateChecked(todo.id)"/>
      <!--不推荐在这里使用 v-model-->
      <!--<input type="checkbox" v-model="todo.done"/>-->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="Delete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "UserItem",
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    // 勾选项状态
    updateChecked(id) {
      this.checkTodo(id)
    },
    // 删除Todo项
    Delete(id) {
      if (confirm('确定删除吗')) {
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
  background-color: lightgrey;
}

li:hover button {
  display: block;
}
</style>
