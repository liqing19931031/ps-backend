import Vue from 'vue'
import App from './App'
import router from './router' // 动态加载路由 -> 扩展（根据用户权限动态获取路由）
import ElementUI from 'element-ui'
import store from './store' // 状态管理机 -> 基于vuex做的请求模块化处理
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
