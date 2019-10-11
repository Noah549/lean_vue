import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'

// 导入 App 组件
import App from './App.vue'
// 导入 Account 组件
import Account from './components/Account.vue'
// 导入 GoodList 组件
import GoodList from './components/GoodList.vue'

// 2.手动安装 VueRouter
Vue.use(VueRouter)
// 3.创建路由对象
var router = new VueRouter({
  routes: [
    // account goodlist
    {path: '/account', component: Account},
    {path: '/goodlist', component: GoodList}
  ]  
})
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  // 4.将路由对象挂载到 vm 上
  router: router
})