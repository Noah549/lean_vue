<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo = "addTodo" />
      <TodoList :TodoList = "TodoList" :removeTodo = "removeTodo" />
      <TodoFooter :TodoList = "TodoList" :removeSelected = "removeSelected" :selectAll = "selectAll" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      // 从localStorage读取TodoList
      TodoList: JSON.parse(window.localStorage.getItem('TodoList') || '[]')
    }
  },
  watch: {// 监视
    TodoList: {
      deep: true,// 深度监视
      handler: function(value) {
        // 将TodoList最新的值，保存到localStorage
         window.localStorage.setItem('TodoList', JSON.stringify(value))
      }
    }
  },
  methods: {
    addTodo(todo) {
      this.TodoList.unshift(todo)
    },
    removeTodo(index) {
      this.TodoList.splice(index, 1)
    },
    // 删除所有选中的todo
    removeSelected() {
      this.TodoList = this.TodoList.filter(todo => !todo.complete)
    },
    // 全选/全不选
    selectAll(check) {
      this.TodoList.forEach(todo => todo.complete = check)
    }
  }
}
</script>

<style>
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