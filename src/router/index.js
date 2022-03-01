import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login'
import Tabbar from '../views/layout/Tabbar'
import Home from '../views/layout/Home'
import Conversation from '../views/layout/Conversation'
import Video from '../views/layout/Video'
import Person from '../views/layout/Person'
import SearchIndex from '../views/search/search-index'
import Article from '../views/article/article'
import UserProfile from '../views/user-profile'
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
  },
  {
    path: '/search',
    name: 'search',
    component: SearchIndex
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: Article,
    props: true // 开启 Props 传参，说白了就是把路由参数映射到组件的 props 数据中
  },
  {
    path: '/user/profile',
    name: 'user-profile',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
