import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Tabbar from '../views/layout/Tabbar'
import Home from '../views/layout/Home'
import Conversation from '../views/layout/Conversation'
import Video from '../views/layout/Video'
import Person from '../views/layout/Person'
Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    // name: 'layout', // 如果父路由有默认子路由，那它的 name 没有意义
    path: '/',
    component: Tabbar,
    children: [
      {
        name: 'home',
        path: '', // 默认子路由，只能有1个
        component: Home
      },
      {
        name: 'conversation',
        path: '/conver',
        component: Conversation
      },
      {
        name: 'video',
        path: '/video',
        component: Video
      },
      {
        name: 'person',
        path: '/person',
        component: Person
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
