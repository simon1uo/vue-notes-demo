<!--App组件总汇所有组件-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <UserHeader @addTodo="addTodo"></UserHeader>
        <UserList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <UserFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></UserFooter>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import UserList from "./components/UserList";

export default {
  name: "App",
  components: {
    UserHeader,
    UserFooter,
    UserList
  },
  data() {
    return {
      /*todos: [
        {id: '001', title: '吃饭', done: true},
        {id: '002', title: '睡觉', done: false},
        {id: '003', title: '学习', done: false}
      ]*/
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一个TODO
    addTodo(todo) {
      // console.log("App's receving data", todo)
      this.todos.unshift(todo)
    },
    // 更新Todo勾选状态
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
        console.log(todo.done)
      })
    },
    // 删除Todo项
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选Todo项
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    // 清除所有已经完成的Todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    // 监视 todos 对象
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
