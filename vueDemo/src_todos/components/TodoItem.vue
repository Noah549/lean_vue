<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}" >
    <label>
      <input type="checkbox" v-model = "item.complete" />
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="remove">删除</button>
  </li>
</template>

<script>
export default {
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  props: {
    item: Object,
    index: Number,
    removeTodo: Function
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = 'gray'
        this.isShow = true
      }else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    remove() {
      const {item, index} = this
      if (window.confirm('确定删除'+item.content+'吗？')) {
        this.removeTodo(index)
      }
    }
  }
}
</script>

<style>
</style>