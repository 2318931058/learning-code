import Vue from 'vue'
import VueRouter from "vue-router";

import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/', 
      component:Layout,
      redirect:'/article'
    },
    {
      name:'layout',
      path:'/layout',
      component:Layout,
      // 二级路由步骤一：在children配置项中按照routes格式配置二级路由
      children:[
        {
          name:'article',
          path:'/article',
          component:Article,
        },
        {
          name:'collect',
          path:'/collect',
          component:Collect,
        },
        {
          name:'like',
          path:'/like',
          component:Like,
        },
        {
          name:'user',
          path:'/user',
          component:User,
        },
      ]
    },
    {
      name:'detail',
      path:'/detail/:id',
      component:ArticleDetail
    },
  ]
})

export default router