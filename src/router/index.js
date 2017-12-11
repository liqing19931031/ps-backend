import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout' // 主容器组件
const _import = require('./_import_' + process.env.NODE_ENV + '.js') // 加载路由方法（这样就不需要申明了）

Vue.use(Router)

export const constantRouterMap = [ // 公共路由
  { path: '/login', component: _import('login/login'), hidden: true }, // huidden 用来表示是否显示在左侧主导航上
  { path: '',
    component: Layout,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/dashboard'),
      name: 'dashboard',
      icon: 'dashboard',
      title: '首页'
    }]
  },
  {
    path: '/icons',
    component: Layout,
    children: [{
      path: 'index',
      icon: 'icons',
      component: _import('icon/icon'),
      name: 'icons',
      title: '图标'
    }]
  },
  {
    path: '/article',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: '文章',
      icon: 'article'
    },
    children: [
      { path: 'articleAdd', component: _import('article/article-form'), name: 'articleAdd', meta: {name: 'articleAdd', title: '文章添加'} },
      { path: 'articleList', component: _import('article/article-list'), name: 'articleList', meta: {name: 'articleList', title: '文章列表'} }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
