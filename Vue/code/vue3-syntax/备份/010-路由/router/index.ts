// 3. 导入路由和路由模式(history模式美观但上线时需要服务端配合、hash不美观且seo优化较差，但不需要服务端配合)
import { createRouter, createWebHistory } from 'vue-router'

// 4 导入路由组件
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import AboutView from '@/views/AboutView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  // 5. 配置路由模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 6. 进行路由相关配置
    {
      // name属性表示为命名路由，可以不写，但设计params传参时必写
      name: 'HomeView',
      path: '/home',
      component:HomeView
    },
    {
      name:'NewsView',
      path:'/news',
      component:NewsView,
      // children表示嵌套路由
      children:[
        {
          name:'Detail',
          // 嵌套路由不需要加斜杠，但在传参时必须将key值写在路径后(问号表示可传可不传)，如示例中的id、title、content/
          path:'detail/:id?/:title?/:content?',
          component:DetailView,
          // 路由的props属性可以让组件更方便地接收参数
          props:true     // 方式一：将路由收到地所有params参数作为props传值给组件；
          // props(route){
          //   return route.params    // 方式二：可以自行决定将什么作为参数传递给组件，route.params和route.query都可以
          // }
          // props:{
          //   a:100     // 方式三：想将什么传递给组件都可以
          // }

        }
      ]
    },
    {
      name:'AboutView',
      path:'/about',
      component:AboutView
    },
    // 重定向：将特定的路径，重新定向到已有路径
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

// 7. 导出路由
export default router
