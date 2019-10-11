<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class = "container">
      <Add :addComment = "addComment"/>
      <List :comments = "comments" :removeComment = "removeComment"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
    data () {
        return {
            comments: [
                {name: 'aa', content: 'vue so easy'},
                {name: 'bb', content: 'vue very good'},
                {name: 'cc', content: 'hello vue'},            ]
        }
    },
    components: {
        Add,
        List
    },
    methods: {
        //添加评论
        addComment(comment) {
            this.comments.unshift(comment)
        },
        //删除评论
        removeComment(index) {
            this.comments.splice(index, 1)
        }
    }
};
</script>

<style>
</style>