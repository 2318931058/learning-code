import Vue from 'vue'

import FindMusicView from '@/views/FindMusicView.vue'
import MyMusicView from '@/views/MyMusicView.vue'
import MyFriendView from '@/views/MyFriendsView.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import NotFound from '@/views/NotFound.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置路由模式：hash(默认)或history(需服务器端支持)
  mode:'hash',
  // 配置路由路径
  routes:[
    // 路由重定向
    {path:'/',redirect:'/home'},

    // 基本使用
    {path:'/find', component:FindMusicView},
    {path:'/my', component:MyMusicView},
    {path:'/friend', component:MyFriendView},

    // 查询参数传参
    {path:'/home', component:Home},
    {path:'/search', component:Search},

    // 动态路由传参步骤一：在接收参数页面使用/path/:关键字  配置路由
    {path:'/home', component:Home},
    // words可以是任何内容，但不能忘记添加冒号:
    // 当前的写法表示必须要传递参数，否则会匹配不到组件，显示空白。
    // 若要实现不传参数也能匹配到组件的效果，可以添加可选符？,如将'/search/:words'变为'/search/:words?'
    {path:'/search/:words', component:Search},

    // 404NotFound---必须要放在最后：*表示任意路径
    {path:'*', component:NotFound}
  ],

  // 使用自定义类名控制样式
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
})

export default router