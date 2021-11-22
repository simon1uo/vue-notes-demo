<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll"/> 全选-->
            <input type="checkbox" v-model="isAll"/> 全选
    </label>
    <span>
          <span>已完成 {{ DoneTotal }}</span> / 全部 {{ total }}
        </span>
    <button class="btn btn-danger" @click="ClearAll">清除已完成任务</button>
  </div>

</template>

<script>
export default {
  name: "UserFooter",
  props: ['todos', "CheckAllTodo", "ClearAllTodo"],
  computed: {
    total() {
      return this.todos.length
    },
    DoneTotal() {
      /*
      let i = 0
      this.todos.forEach((todo)=>{
        if(todo.done) i++
      })
      return i*/
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.DoneTotal === this.total && this.total > 0

      },
      set(value) {
        // console.log(value)
        this.CheckAllTodo(value)
      }
    }
  },
  methods: {
    /*checkAll(e) {
      // console.log(e.target.checked)
      this.CheckAllTodo(e.target.checked)
    }*/
    ClearAll() {
      if (confirm('清除已完成的任务'))
        this.ClearAllTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>