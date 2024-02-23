import Vue from 'vue'

import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    // 路由重定向
    {path:'/',redirect:'/home'},

    // query传参
    // {path:'/home', component:Home},
    // { name:'searchView', path:'/search', component:Search},

    // 动态路由传参
    {path:'/home', component:Home},
    { name:'searchView', path:'/search/:words', component:Search},
  ],
})

export default router