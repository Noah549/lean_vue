// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 导入 Account 组件
import Account from './components/Account.vue'
// 导入 GoodList 组件
import GoodList from './components/GoodList.vue'
// 导入 Login 组件
import Login from './components/Login.vue'
// 导入 Register 组件
import Register from './components/Register.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes: [
      // account goodlist
      {
        path: '/account',
        component: Account,
        children: [
          { path: 'login', component: Login},
          { path: 'register', component: Register}      
        ]
      },
      {
        path: '/goodlist',
        component: GoodList
      }
    ]  
  })

  export default router