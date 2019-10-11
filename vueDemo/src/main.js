import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 导入 App 组件
import App from './App.vue'

// 2.手动安装 VueRouter
Vue.use(VueRouter)

import router from './router.js'

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  // 4.将路由对象挂载到 vm 上
  router
})