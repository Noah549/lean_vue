<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAllCheck" />
        </label>
        <span>
            <span>已完成{{selectCount}}</span> / 全部{{TodoList.length}}
        </span>
        <button class="btn btn-danger" v-show="selectCount" @click="remove">清除已完成任务</button>
    </div>    
</template>

<script>
export default {
    props: {
      TodoList: Array,
      removeSelected: Function,
      selectAll: Function
    },
    computed: {
      selectCount() {
        // const {TodoList} = this
        // let count = 0;
        // for (let i = 0; i < TodoList.length; i++) {
        //   if (TodoList[i].complete === true) {
        //     count++
        //   }
        // }
        // return count

        // 使用es6新语法
        return this.TodoList.reduce((total, todo) => total + (todo.complete?1:0), 0)

      },
      isAllCheck: {
        get() {
          return this.selectCount === this.TodoList.length && this.selectCount > 0
        },
        set(state) {
          this.selectAll(state)
        }
      }
    },
    methods: {
      remove() {
        this.removeSelected()
      }
    }
}
</script>

<style>
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