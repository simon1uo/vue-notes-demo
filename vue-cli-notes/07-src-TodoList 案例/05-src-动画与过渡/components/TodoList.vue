<template>
  <ul class="todo-main">
    <transition-group appear
                name="animate__animated animate__bounce"
                enter-active-class="animate__fadeInRight"
                leave-active-class="animate__fadeOutRight"
    >
      <TodoItem v-for="todo in todos" :key="todo.id" :todoObj="todo"/>
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css'
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
