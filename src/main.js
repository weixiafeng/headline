import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './styles/index.less'
import Vant from 'vant'
import 'vant/lib/index.css'
// 动态设置 REM 基准值
import 'amfe-flexible'
import './utils/dayjs'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
