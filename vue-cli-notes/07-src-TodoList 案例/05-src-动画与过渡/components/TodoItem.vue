<template>
  <li>
    <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)">
    <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
    <input type="text"
           v-show="todoObj.isEdit"
           :value="todoObj.title"
           @blur="handleBlur(todoObj, $event)"
           ref="inputTitle">
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button class="btn btn-normal" @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ['todoObj'], // 声明接收todo对象
  methods: {
    handleCheck(id) {
      // 通知App组件将对应的todo对象的值取反
      // this.$bus.$emit('checkTodo', id)
      pubsub.publish('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm("是否删除选择的todo项目？")) {
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }
    },
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入的修改值不能为空！')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
