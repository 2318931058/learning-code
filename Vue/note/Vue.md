# Vue

## 1. 公共章节

### 1.1 插值表达式

> 插值表达式一种利用 *表达式* 进行插值，将数据渲染到模板/页面中的语法

```vue
<template>
	<标签名> {{ 变量名 }} </标签名>
</template>
```

### 1.2 修饰符

1. 按键修饰符

   | 修饰符         | 说明            |
   | -------------- | --------------- |
   | `@keyup.enter` | enter键按下触发 |

2. 事件修饰符

   | 修饰符                     | 说明                       |
   | -------------------------- | -------------------------- |
   | `@事件名.stop='函数名'`    | 阻止冒泡（写在子类）       |
   | `@事件名.prevent='函数名'` | 阻止默认行为               |
   | `@事件名.stop.prevent`     | 同时阻止事件冒泡和默认行为 |

3. v-model修饰符

   | 修饰符                    | 说明           |
   | ------------------------- | -------------- |
   | `v-model.trim='变量名'`   | 去掉首尾空格   |
   | `v-model.number='变量名'` | 将数据转为数字 |
   | `v-model.lazy = '变量名'` | 延迟更新       |

### 1.3 指令

> Vue中的指令是指带有 *v-前缀* 的特殊标签属性

1. `v-html`：动态解析标签，设置DOM元素的`innerHTML`属性值(可解析标签)；

   > 单文件组件中，`scoped`的样式不会应用在`v-html`内部

   ```vue
   <template>
   	<!-- 不要将v-html用在用户提交的内容中 -->
   	<标签名 v-html='变量名'></标签名>
   </template>
   ```

2. `v-text`：动态解析标签，设置DOM元素的`textContent`属性值(不可解析标签)；

   ```vue
   <template>
   	<标签名 v-text='变量名'></标签名>
   </template>
   ```

3. `v-show`：动态控制DOM元素的显示/隐藏(控制`display`属性，用于频繁切换场景)；

   ```vue
   <template>
   	<标签名 v-show='boolean'>内容</标签名>
   </template>
   ```

4. `v-on`：为DOM元素绑定事件；

   ```vue
   <template>
   	<!-- 内联语句---完整写法 -->
   	<标签名 v-on:事件类型='内联语句'>内容</标签名>
   	
   	<!-- 内联语句---简写形式 -->
   	<标签名 @事件类型='内联语句'>内容</标签名>
   
   	<!-- 函数形式---完整写法 -->
   	<标签名 v-on:事件类型='方法名()'>内容</标签名>
   
   	<!-- 函数形式---简写形式 -->
   	<标签名 @事件类型='方法名()'>内容</标签名>
   </template>

5. `v-if`：动态控制DOM元素的添加与移除(基于条件判断，创建/移除元素节点)；

   ```vue
   <template>
   	<标签名 v-if='boolean'>内容</标签名>
   
   	<!-- v-else和v-else-if指令用于辅助v-if指令进行判断渲染（均为可选，但必须与v-if指令一同使用） -->
   	<标签名 v-else='boolean'>内容</标签名>
   	<标签名 v-else-if='boolean'>内容</标签名>
   </template>
   ```

6. `v-for`：基于数据进行循环，多次渲染整个元素，包括数组、对象、数字等；

   ```vue
   <template>
   	<外标签名 v-for='(item,index) in array/object/num' :key='唯一标识'>
           <内标签名>{{ item.xxx }}</内标签名>    
       </外标签名>
   </template>
   ```

7. `v-bind`：动态设置DOM元素的属性，如`src`等；

   ```vue
   <templata>
   	<!-- 完整写法 -->
       <标签名 v-bind:属性名=’属性值‘></标签名>
   
       <!-- 简写形式 -->
       <标签名 :属性名='属性值'></标签名>
   
       <!-- 绑定class样式：对象形式用于一个类名来回切换的场景 -->
       <标签名 :class='{类名1:Boolean, 类名2:Boolean}'></标签名>
       
       <!-- 绑定class样式：数组形式用于批量添加/删除类的场景 -->
       <标签名 :class="['类名1', '类名2', ···]"></标签名>
       
       <!-- 绑定style样式：用于某个具体属性的动态设置 -->
       <标签名 :style="{属性名1:'属性值', 属性名2:'属性值', ···}"></标签名>
   </templata>
   ```

8. `v-model`：给表单元素使用，实现双向数据绑定；

   | 标签     | 绑定的属性 |
   | :------- | :--------- |
   | 单行文本 | `value`    |
   | 密码框   | `value`    |
   | 文本域   | `value`    |
   | 单选框   | `checked`  |
   | 复选框   | `checked`  |
   | 下拉菜单 | `value`    |

   ```vue
   <!-- 以文本输入框为例 -->
   <input type='text' v-model='变量名'>
   ```

## 2. Vue2章节

### 2.1 配置项

1. `data`：定义响应式数据(通过插值表达式使用)

   ```vue
   <script>
   	export default {
           data(){
               return { 变量名:值 }
           }
       }
   </script>
   ```
   
2. `methods`：提供处理响应式数据的方法

   ```vue
   <script>
   	export default {
           methods:{
               函数名(){
                   // 函数逻辑
               }
           }
       }
   </script>
   ```

3. `computed`：基于现有数据计算新值(通过插值表达式使用)。依赖的数据发生变化，自动重新计算；

   ```vue
   <script>
   	export default {
           // 简写形式（默认）：只能获取，不能修改；
           computed:{
               计算属性名(){
                   // 基于现有数据，编写求值逻辑
                   return 结果
               }
           }
   
           // 完整形式：既可获取，又可修改；
           computed:{
               计算属性名:{
                   get(){
                       // 基于现有数据，编写求值逻辑
                       return 结果
                   },
                   set(val){
                       // 修改代码的逻辑
                   }
               }
           }
       }
   </script>

4. `watch`：监视数据变化，执行异步操作

   ```vue
   <script>
   	export default {
           // 监视简单类型数据
           watch:{
               要监视的变量名(newVal, oldVal){
                   console.log(newVal, oldVal)
               }
           }
   
           // 监视对象类型数据
           watch:{
               '对象名.属性名'(newVal, oldVal){
                   console.log(newVal, oldVal)
               }
           }
   
           // 侦听属性完整写法：深度监视和立即执行
           watch:{
               deep:true,
               immediate:true,
               handler(newVal, oldVal){
                   console.log(newVal, oldVal)
               }
           }
       }
   </script>

5. `props`：子组件接收/校验父组件传递过来的数据/方法

   ```vue
   <script>
   	export defautl {
           // 基础写法：类型校验
           props:{
             变量名:类型
           }
   
           // 完整写法：类型校验、非空校验、默认值校验、自定义校验
           props:{
             // 类型校验
             名称:类型,
             // 非空校验：true或false(一般不与默认值连用)
             required:true,
             // 默认值校验：一般不与非空连用
             default:值,
             // 自定义校验：returnfalse为未通过校验
               // 自定义校验逻辑
               console.error('可以自定义错误提示')
               return false
           }
       }
   </script>

6. `components`：用于局部注册组件

   ```vue
   <script>
   	export default {
           components:{组件名称:组件对象}
       }
   </script>

7. `provide`：向下层组件传递数据/方法

   ```vue
   <script>  
   	export default {
         provide () {
           return {
              // 普通类型【非响应式】、引用类型【响应式】
              变量名: this.xxx
           }
         }
       }
   </script>
   ```

8. `inject`：接收上层组件传递的数据/方法(不能在自身组件内进行修改)

   ```vue
   <script>
       export default {
         inject: ['变量名'],
         created () {
           console.log(this.变量名)
         }
       }
   </script>
   ```

9. `directives`：全局/局部注册自定义指令(模板中通过`v-指令名`使用即可)

   ```javascript
   // main.js---全局注册指令的方式
   Vue.directive('指令名',{
     // inserted生命周期钩子作用：会在指令所在的元素被插入到页面时触发
     inserted(el, binding){
       // el就是指令所绑定的元素， binding用来接收用户传递过来的值
       el.focus()	// 自动聚焦（示例）
     },
     // update指令的值修改时触发，提供值变化后dom更新的逻辑
     update(el, binding){
   	console.log(el, binding)
     }
   })
   ```

   ```vue
   <script>
       // .vue文件---局部注册指令的方式
   	export default {
           directives:{
               指令名:{
                 inserted(el, binding){
                   console.log(el, binding)
                 },
                 update(el, binding){
                   console.log(el, binding)
                 }
               }
           }
       }
   </script>
   ```

### 2.2 生命周期

| 生命周期钩子    | 说明                                     |
| :-------------- | :--------------------------------------- |
| `beforeCreate`  |                                          |
| `created`       | 有`data`等，常用于发送请求               |
| `beforeMount`   |                                          |
| `mounted`       | 操作`dom`                                |
| `beforeUpdate`  |                                          |
| `updated`       |                                          |
| `beforeDestroy` | 实例身上的东西依然可用，多用于清除定时器 |
| `destroyed`     |                                          |
| `inserted`      | 结合自定义指令使用                       |
| `update`        | 结合自定义指令使用                       |
| `activated`     | 组件激活时触发，结合`keep-alive`使用     |
| `deactivated`   | 组件失活时触发，结合`keep-alive`使用     |

### 2.3 组件通信

1. 父子通信：`props && $emit`

   | 传递方式 | 步骤                                               |
   | -------- | -------------------------------------------------- |
   | 父传子   | 父组件中以函数的形式定义响应式数据                 |
   |          | 父组件中给子组件以添加属性的方式给子组件传值       |
   |          | 子组件内部通过`props`接收父组件传递过来的数据/方法 |
   |          | 在子组件的模板中直接使用父组件传递过来的数据/方法  |
   | 子传父   | 在子组件中定义方法，并通过`$emit`向父组件发生通知  |
   |          | 在子组件的模板中定义按钮触发方法                   |
   |          | 父组件模板中监听子组件传递过来的数据/方法          |
   |          | 父组件提供处理函数供子组件调用                     |

2. 祖孙通信：`provide && inject`

   ```vue
   <script>
   	// 顶层组件    
   	export default {
         provide () {
           return {
              变量名: this.xxx
           }
         }
       }
   </script>
   ```

   ```vue
   <script>
   	// 底层组件
       export default {
         inject: ['变量名'],
         created () {
           console.log(this.变量名)
         }
       }
   </script>
   ```

3. 任意组件通信(少量数据)：`EventBus`

   ```vue
   <script>
       // 1. src/utils/EventBus.vue下创建事件总线
       import Vue from 'vue'
       const Bus = new Vue()
       export default Bus
   </script>
   ```

   ```vue
   <script>
   	// 2. 绑定事件
       import Bus from "@/utils/EventBus.vue";
       created () {
         Bus.$on('事件名', (形参) => {
           this.xxx = 形参
         })
       }
   </script>
   ```

   ```vue
   <script>
   	// 3. 触发事件
   	Bus.$emit('事件名', 实参)
       
       // 4. 离开页面需要在beforeDestroy生命周期中销毁
       beforeDestroy() {
           Bus.$off('事件名')
       }
   </script>
   ```

4. 任意组件通信(大量数据)：`VueX`

   ```javascript
   // src/stores/modules/xxx.js
   // 严格模式---上线时需要移除---开启后组件直接修改数据会报错
   strict: true,			
   
   // 定义响应式数据
   const state = { 变量名: 值, },
   
   // 定义同步方法：所有同步函数的首个参数都是state属性，第二个参数为形参
   const mutations = {
     同步函数名 (state, 形参) { 
       console.log(state.变量名)
     }, 
   },
   
   // 定义异步方法调用同步方法：首个参数均为context(通过context.commit调用mutations中的方法)
   const actions = {
     异步函数名 (context, 实参) {
       context.commit('同步函数名', 实参)
     }
   },
   
   // 计算属性：可以通过state.xxx或getters.xxx取到state或getters中的值
   const getters = {
     // 
     计算属性名 (state,getters) { 
       console.log(state.变量名)
     }
   }
   
   export default {
     // 开启命名空间
     namespaced: true,
     state,
     mutations,
     actions,
     getters
   }
   ```

   ```javascript
   // src/stores/index.js
   // 导入 vue
   import Vue from 'vue'
   // 导入 vuex
   import Vuex from 'vuex'
   // vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
   Vue.use(Vuex)
   // 导入模块
   import students from './modules/xxx.js'
   // 创建仓库 store
   const store = new Vuex.Store({
     // 严格模式---上线时需要移除---开启后组件直接修改数据会报错
     // strict: true,
     // 模块化拆分
     modules: {
       students,
       teachers
     }
   })
   
   // 导出仓库
   export default store
   ```

   ```vue
   <script>
     // 任意.vue文件中使用---辅助函数方法(须开启命名空间)
   	import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
     export default {
       methods:{
         方法名(){
           // 通过辅助函数调用modules中的mutations的同步函数
           ...mapMultations('模块名', ['xxx']),
           // 通过辅助函数调用modules中的actions的异步函数
           ...mapActions('模块名', ['xxx'])
         }
       },
       computed:{
         // 通过辅助函数获取module中的state的数据
         ...mapState('模块名'，['xxx']),
         // 通过辅助函数获取module中的getters的数据
         ...mapGetters('模块名',['xxx'])
       }
     }
   </script>
   
   <template>
     <div>
       <!-- 通过辅助函数获取module中的state的数据 -->
       <p>{{ 变量名 }}</p>
       <!-- 通过辅助函数获取module中的getters的数据 -->
       <p>{{ 变量名 }}</p>
       <!-- 通过辅助函数调用modules中的mutations的同步函数 -->
     	<button @事件名="函数名(要传递的参数)">按钮</button>
       <!-- 通过辅助函数调用modules中的actions的异步函数 -->
       <button @事件名="函数名(要传递的参数)">按钮</button>
     </div>
   </template>
   ```

5. 父子组件表单元素的双向数据绑定：`v-model`

   ```vue
   <template>
   	<!--  父组件---v-model给子组件绑定响应式数据 -->
   	<子组件 v-model='变量名' />
   </template>
   ```

   ```vue
   <template>
   	<!--  子组件---select绑定的是value和change事件 -->
   	<select :value='value' @change='方法名'>
           <option value=''></option>
       </select>
   	<!--  子组件---单行文本框绑定的是value和input事件 -->
   	<input type="text" :value="value" @input="方法名" />
   </template>
   
   <script>
   	export default {
           props:{
               // 子组件---接收响应式数据
               value:数据类型
           },
           methods:{
               // 向父组件发送修改通知
               方法名(event) {
                 this.$emit("input",event.target.value);
                 // this.$emit("change",event.target.value);
               },
           }
       }
   </script>
   ```

6. 父子组件表单元素的双向数据绑定：`.sync`

   ```vue
   <template>
   	<!--  父组件---使用.sync给子组件绑定响应式数据 -->
   	<子组件 :自定义属性名.sync='变量名' />
   </template>
   ```

   ```vue
   <template>
   	<标签名 @clcik='方法名'></标签名>
   </template>
   
   <script>
   	export default {
           props:{
               // 子组件---接收响应式数据
               自定义属性名:数据类型
           },
           methods:{
               // 向父组件发送修改通知
               方法名() {
                 this.$emit("update:自定义属性名",false);
               },
           }
       }
   </script>
   ```

### 2.4 组件路由

1. 路由的基本配置

   ```javascript
   // src/router/index.js
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   Vue.use(VueRouter)
   import 初始页面组件名称 from '路径'
   const 其余组件名称 = () => import('路径')
   const router = new VueRouter({
       mode:'histroy',   		// 路由模式，包括histroy和hash
       routes:[
           {name:'初始页面组件名称', path:'/路径名称', component:初始页面组件名称},
           {name:'组件名称', path:'/路径名称', component:组件名称,children:[{name:'',path:'', component: }]},
           ······
           {name:'组件名称', path:'/路径名称', redirect:'/路径名称'},	// 重定向
           {name:'组件名称', path:'*', component:组件名称}				// 404
       ]
   })
   ```

2. 声明式导航和编程式导航

   - 声明式导航

     ```vue
     <template>
     	<!-- query传参  -->
     	<router-link to='/路径/属性名=属性值'></router-link>
     	<router-view>router-link用于设置传参路径，router-view用于设置视图位置</router-view>
     	<!-- 接参页面模板中通过 {{ $route.query.属性名 }} 接收参数，script中通过 this.$route.query.属性名 接收参数 -->
     </template>
     ```

     ```vue
     <template>
     	<!-- params传参：需在index.js中配置路径时将path改为：path:'路径/:属性名?'的格式(问号表示可选) -->
     	<router-link to='/路径/属性值'></router-link>
     	<router-view>router-link用于设置传参路径，router-view用于设置视图位置</router-view>
     	<!--接参页面模板中通过 {{$route.params.属性名}} 接收参数，script中通过 this.$route.params.属性名 接收参数 -->
     </template>
     ```
   
   - 编程式导航
   
     ```vue
     <script>
         // query传参
     	export default {
             methods:{
                 方法名(){
                     // push | replace
                     this.$router.push({
                         path:'路径',
                         query:{
                             属性名:属性值
                         }
                     })
                 }
             }
         }
         // 接参页面的script标签中使用 this.$route.query.属性名 接收参数
         // 接参页面的模板中使用 {{ $route.query.属性名 }} 接收参数
     </script>
     ```
   
     ```vue
     <script>
         // params传参：需在index.js中配置路径时将path改为：path:'路径/:属性名?'的格式(问号表示可选)
     	export default {
             methods:{
                 方法名(){
                     // push | replace
                     this.$router.push({
                         path:'路径',
                         params:{
                             属性名:属性值
                         }
                     })
                 }
             }
         }
         
         // 接参页面的script标签中使用  this.$route.params.属性名 接收参数
         // 接参页面的模板中使用 {{ $route.params.属性名 }} 接收参数
     </script>
     ```

3. 选中路由高亮显示

   ```vue
   <style>
       选择器.router-link-active {
           // css样式
       }
   </style>
   ```

4. 路由导航守卫

   ```javascript
   // src/router/index.js
   router.beforeEach((to,from,next)=>{
     // to为要进入的路由对象；from为导航要离开的路由对象；next为若要进入下个导航，就必须调用next()方法，否则不会进入下个导航
   })
   
   // 示例：
   const authUrls = ['/pay', 'myorder']
   router.beforeEach((to, from, next) => {
     if (!authUrls.includes(to.path)) {
       // 非权限页面，直接放行
       next()
       return
     }
     // 是权限页面，需要判断是否登录（是否有token）
     // const token = store.state.user.userInfo.token
     const token = store.getters.token
     console.log(token)
     if (token) {
       next()
     } else {
       next('/login')
     }
   })
   ```

5. 路由缓存

   路由跳转后，原有组件被销毁；返回该组件时组件被重新创建，数据被重新加载。路由跳转后，希望返回上一路由页面，可以使用

   ```vue
   <script>
   	export default {
           methods: {
               方法名 () {
                   // this.$router.back()
                   this.$router.go(-1)
               }
           }
       }
   </script>
   ```

   若希望返回原有组件时，能返回原来的位置，可以使用`keep-alive`将组件缓存下来；

   | 属性      | 说明                                             |
   | --------- | ------------------------------------------------ |
   | `include` | 值为组件名构成的数组，只有匹配的组件会被缓存     |
   | `exclude` | 值为组件名构成的数组，任何匹配的组件都不会被缓存 |
   | `max`     | 值为数字，表示最多可以缓存多少组件实例           |

   ```vue
   <template>
     <div>
       <keep-alive :include="['组件名']">
         <router-link to='/路径'></router-link>
       </keep-alive>
     </div>
   </template>
   ```

### 2.5 组件插槽

1. 默认插槽

   - `src/components/xxx.vue`文件中书写公共结构，需要定制的部分使用`<slot>默认内容</slot>`进行替换
   - 需要使用插槽的`.vue`文件中引入`xxx.vue`组件，需要定制的内容使用`<组件名></组件名>`包裹

2. 具名插槽

   - `src/components/xxx.vue`文件中书写公共结构，需要定制的部分使用`<slot name='插槽名称'>默认内容</slot>`替换；

   - 在需要使用插槽的组件引入书写公共结构的组件，需要定制的内容使用以下内容包裹(上下两种方式均可)；

     ```vue
     <template>
     	<组件名>
             <!--  方式一 -->
             <template v-slot:插槽名称>定制内容</template>   
     		<!--  方式二 -->
             <template #插槽名称>定制内容</template> 
         </组件名>
     </template> 
     ```

3. 作用域插槽：作用域插槽多用于数据在子组件，由数据生成的结构在父组件的场景

   - 子组件中以属性的方式传值：`<slot :属性名='变量名'></slot>`
   - 父组件在`template`中接收值：`<template v-slot:插槽名称='{属性名}'></template>`
   - 父组件的`template`中使用接收的值

### 2.6 其它功能

1.  工程化
   - 打开终端，运行`pnpm create vue@2`
   - 输入项目名称
   - 依次选择需要安装的配置
   - 安装依赖包：`pnpm i`
   - 启动项目：`pnpm dev`（找`package.json`）

2. 组件注册

   - 局部注册：在使用的组件中注册

     ```vue
     <script>
     import 组件对象 from '路径'
     export default {
         components:{
             '组件名':组件对象
         }
     }
     // 在模板中通过 <组件名></组件名> 直接使用
     </script>
     ```

   - 全局注册：在`main.js`中注册后可以在任意组件使用

     ```javascript
     import 组件对象 from '路径'
     Vue.component('组件名':组件对象)
     // 在.vue文件的模板中通过 <组件名></组件名> 直接使用
     ```

3. 本地存储

   ```vue
   <script>
   	export default {
           methods:{
               方法名() {
                   // 存储
                   localStorage.setItem('标识符', JSON.stringify(变量名))
                   // 使用
                   JSON.parse(localStorage.getItem('标识符'))
               }
           }
       }
   </script>
   ```

4. 自动获取焦点

   - 方式一:main.js中全局注册自定义事件

     ```javascript
     Vue.directive('指令名',{
       inserted(el){
         el.focus()	// 自动聚焦
       }
     })
     // 在需要使用的模板中通过'v-指令名'使用即可
     ```

   - 方式二:使用异步更新$nextTick

     ```vue
     <template>
     	<div>
             <input type='text' ref='inp' />
         </div>
     </template>
     
     <script>
     	export default { 
             methods:{
                 this.$nextTick(() => {
                     this.$refs.inp.focus();
                 });
             }
         }
     </script>
     ```

5. 异步更新

   ```vue
   <script>
   	export default { 
           methods:{
               this.$nextTick(() => { } );
           }
       }
   </script>
   ```

6. 获取DOM

   ```vue
   <template>
   	<!-- 1. 在模板中给dom对象或组件实例添加ref属性 -->
   	<标签名 ref='标识名称' ></标签名>
   </template>
   
   <script>
   	export default {
           // 2. 在mounted生命周期钩子中通过this.$refs.xxx获取dom对象或组件实例，如
           mounted(){
               let temp = this.$refs.标识名称
           }
       }
   </script>
   ```

7. 组件混入：mixin提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。

   - 在src/mixins/xxx.js中编写复用代码

     ```javascript
     export default {
       // 此处编写的是vue组件实例的配置项，如data、methods等。可以通过一定的语法直接混入组件内部；
       data(){
         return {
           // 若组件内部提供了同名的data或methods，则以组件内部为准；
         }
       },
       created(){
         // 若编写了生命周期钩子，则mixins中的生命周期钩子将与组件内的生命周期钩子以数组形式统一管理
       },
       ······
     }
     ```

   - 在组件中导入并使用

     ```vue
     <template>
     	<div>
             import js文件名 from '路径'
         </div>
     </template>
     <script>
         export default {
             // 在data等配置项中调用js文件中的数据、方法等
         }  
     </script>
     ```

## 3. Vue3章节

### 3.1 响应式数据

1. `ref`的基本使用：`ref`既可以定义简单数据类型，也可定义复杂数据类型；

   ```vue
   <script setup>
     // 从vue中导入ref
     import { ref} from 'vue'
     // 使用ref定义数据
     let 变量名= ref(值)
      // scrit标签中调用ref定义的数据时需要加.value
     const 方法名= () => { console.log(变量名.value) }
   </script>
   
   <template>
    <!-- 模板中可以直接通过插值表达式调用ref定义的响应式数据； -->
     <标签名> {{ 变量名}} </标签名>
   </template>
   ```

2. `reactive`的基本使用：`reactive`只能定义引用数据类型，如数组、对象等；

   > 若重新给`reactive`定义的响应式数据赋值，则数据会失去响应式，可以使用`Object.assign(旧对象名, 新对象名)`浅拷贝来实现，表示将新对象拷贝给旧对象。

   ```vue
   <script setup>
     // reactive的使用
     import { reactive } from 'vue'
     // 使用reactive定义引用类型数据
     let 对象名= reactive( { 属性名 : 属性值 } )
      // script标签中可以直接通过 对象名.属性名 调用reactive定义的数据；
     const 方法名= () => { console.log(对象名.属性名) }
   </script>
   
   <template>
     <!-- 模板中可以直接通过插值表达式调用reactive定义的响应式数据； -->
     <标签名> {{ 对象名.属性名 }} </标签名>
   </template>
   ```

3. 响应式数据的解构赋值：可以通过`toRef`或`toRefs`来实现(如示例)

   - 使用`toRef`进行解构赋值每次只能解构一个属性
   - 使用`toRefs`进行解构赋值可以将引用数据类型中的所有属性一同解构

   ```vue
   <script setup>
       import { reactive } from 'vue'
   	let pandas = reactive({
           name:'fubao',
           age:3
       })
       // 使用toRef进行解构赋值每次只能解构一个属性
       let 属性名 = toRef(对象名, '属性名')
       
       // 使用toRefs进行解构赋值可以将引用数据类型中的所有属性一同解构
       let {属性1, 属性2} = toRefs(对象名)
       
       // 解构后的数据在script中可以直接通过 变量名.value 来使用
       // 解构后的数据在template中直接在插值表达式中输入变量名使用
   </script>
   ```

### 3.2 计算属性

```vue
<script setup>
	// 1. 导入computed；
	import { ref, computed } from 'vue'
    
    // 2. 调用computed进行计算(简写形式)
    // let 新变量名 = computed(()=>{ return 计算结果 })
    
    // 2. 调用computed进行计算(完整形式)
    let 新变量名= computed({
      get:()=>{ return 计算结果 },
      set:(newVal)=>{ console.log(newVal) }
    })
</script>

<template>
	<!-- 3. 模板中通过插值表达式使用计算属性的值；-->
	<标签名> {{ 新变量名 }} </标签名>
</template>
```

### 3.3 侦听属性

> 1. 监视`ref`定义的引用类型数据是监视的对象的地址值，若要监视对象内部属性的变化，需要手动开启深度监视。
>
> 2. 若修改的是`ref`定义的引用类型数据中的属性，则`newVal`和`oldVal`都是新值；若修改的是整个对象，则`newVal`是新值，oldVal是旧值。
>
> 3. 监视`reactive`定义的引用类型数据默认开启深度监视且无法手动关闭。
>
> 4. 若要停止监视，可以使用
>
>    ```vue
>    <script setup>
>     	const方法名 = watch('要监视的变量', () => { 方法名() })
>    </script>
>    ```

```vue
<script setup>
	// 1. 导入watch / watchEffect
    import { ref, watch, watchEffect } from 'vue'
    
    // 2. 使用watch监听已存在的属性值（侦听单个）
    // watch(变量名, (newVal, oldVal) => { console.log(newVal, oldVal) })
        
    // 2. 使用watch监听已存在的属性值（侦听多个）
    // watch([变量1,变量2], ([newVal1,newVal2], [[oldVal1,oldVal2]])=>{console.log([newVal1, newVal2],[oldVal1, oldVal2])})
        
    // 2. 使用watch监听特定属性（只有特定属性发生改变，才会触发回调函数；其余属性发生改变不作反应）
    // watch( () => 对象名.属性名, (newVal, oldVal) => { console.log(newVal, oldVal) } )
    
 	// 2. 深度侦听和立即执行
    // watch(对象名, (newVal, oldVal)=>{ console.log(newVal, oldVal) }, {deep:true, immediate:true})
    
    // 2. watcheEffect可以根据需要自动监视需要监视的对象
    watchEffect(() => {if/for/while等语句})
</script>
```

### 3.4 生命周期

> 子组件的生命周期钩子一般先于父组件的生命周期钩子，可通过在生命周期钩子中写debugger;查看（浏览器会停留在该生命周期钩子阶段）

| 组合式api         | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| `setup`           | `setup`中发送请求(先于`data`等，故`data`中可通过`this.xxx`访问setup中的数据和方法等，反之错误(setup中this为undefined)) |
| `onBeforeMount`   |                                                              |
| `onMounted`       | 操作`dom`                                                    |
| `onBeforeUpdate`  |                                                              |
| `onUpdated`       |                                                              |
| `onBeforeUnmount` | 销毁定时器等                                                 |
| `onUnmounted`     |                                                              |

### 3.5 组件通信

1. 父子通信：`defineProps` && `defineEmits`

   - 父传子

     ```vue
     <script setup>
         import { ref } from 'vue'
     	// 1. 引入子组件
         import 组件名 from '路径'
         // 2. 定义数据/方法
         let 变量名 = ref(值)
         const 方法名 = () => { }
         // 3. 以传递属性的方式给子组件传递数据/方法
         <组件名 :变量名='变量名' :方法名='方法名' />
     </script>
     ```

     ```vue
     <script setup>
     	// 1. 引入defineProps
         import { defineProps } from 'vue'
         
         // 2. 通过defineProps接收传过来的数据(只接收值---script中不可用，template中在插值表达式中输入变量名使用)
         // defineProps(['变量名', '方法名'])
     
         // 2. 接收值，并将值保存下来（通过props.xxx使用）
         // let props = defineProps(['变量名', '方法名'])
     
         // 2. 接收值 + 限制类型(限制的是父组件传递过来的值的类型) + 指定默认值（withDefaults)
         // withDefaults(defineProps<{props:数据类型}>(),{ props:()=>[默认值] })
         
         // 2. 接收值 + 限制类型(限制的是父组件传递过来的值的类型)
         let props = defineProps({ 变量名:数据类型 })
         
         // 3-1. script标签中通过 props.变量名 使用变量
         // 3-2. template标签中通过 props.xxx 使用方法，通过 {{ 变量名 }} 使用变量
     </script>
     ```

   - 子传父

     ```vue
     <script setup>
     	// 1. 引入子组件
         import 组件名 from '路径'
         // 2. 定义修改数据的方法
         const 方法名 = (val) => { console.log(val)  }
         // 3. 给子组件绑定自定义事件
         <组件名 :自定义事件名='方法名' />
     </script>
     ```

     ```vue
     <script setup>
     	// 1. 引入defineEmits
         import { defineEmits } from 'vue' 
         // 2. 通过defineEmits生成emits方法
         const emits = defineEmits(['自定义事件名'])
         // 3. 定义方法调用父组件传递过来的方法
         const 新方法名 = () => {  emits('自定义事件名', 要传递的参数)  }
     </script>
     
     <template>
     	<!-- 4. template标签中调用自己定义的方法 -->
     	<button @事件名='新方法名()'>调用方法传递数据</button>
     </template>
     ```

2. 父子通信：`v-model`

   ```VUE
   <script setup>
   	import 子组件名称 from '路径'
       import { ref } from 'vue'
       let 变量名 = ref('属性值')
   </script>
   
   <template>
   	<!-- 父组件使用v-model指令给组件绑定数据 -->
   	<子组件名称 v-model='变量名'></子组件名称>
   
   	<!-- 若使用该形式，则子组件中的modelValue都要替换为newVal -->
   	<!-- <子组件名称 v-model:newVal='变量名'></子组件名称> -->
   </template>
   ```

   ```vue
   <script setup>
       // 子组件通过defineProps和defineEmits接收数据和调用事件
   	import { defineEmits, defineProps } from 'vue'
       defineProps(['modelValue'])
       const emit = defineEmits('updata:modelValue')
   </script>
   
   <template>
   	<input type='text' :value='modelValue' @input="emit('update:modelaValue', $event.target.value)"
   </template>
   ```

3. 父子通信：`$refs` && `$parent`：使用`$refs`或`$parent`时需要使用`defineExpose`将相关数据暴露出去

   - `$refs`用于获取所有子组件

     ```vue
     <script setup>
     	import 子组件名称 from '路径'
         import { ref } from 'vue'
         // 父组件获取组件实例，定义方法获取子组件
         const 新方法名 = (refs) => {
             // refs获取的是所有的子实例对象，key是每个实例对象的标识符
             for(let key in refs){
                 console.log(refs[key].变量名)
             }
         }  
     </script>
     
     <template>
     	<子组件名称 ref='标识符'></子组件名称>
     	<标签名 @click='新方法名($refs)'>$refs用于获取所有子组件</标签名>
     </template>
     ```

     ```vue
     <script setup>
     	import { ref, defineExpose } from 'vue'
         let 变量名 = 值
         const 方法名 = () => { }
         <!-- 子组件定义响应式数据或方法，并使用defineExpose将其暴露出去 -->
         defineExpose({变量名, 方法名})
     </script>

   - `$parent`用于获取父组件

     ```vue
     <script setup>
     	import { ref, defineExpose } from 'vue'
         
         let 变量名 = 值
         const 方法名 = () => { }
         <!-- 父组件定义响应式数据或方法，并使用defineExpose将其暴露出去 -->
         defineExpose({变量名, 方法名})
     </script>
     ```

     ```vue
     <script setup>
     	const 新方法名 = (parent) => {
             // 可通过 parent.变量名  或  parent.方法名  获取/调用父组件的数据/方法
         }
     </script>
     
     <template>
     	<!-- 子组件通过$parent获取父组件 -->
     	<标签名 @click='新方法名($parent)'>\$parent用于获取父组件</标签名>
     </template>
     ```

4. 祖孙通信：`provide` && `inject`：`provide`用于提供数据/方法，`inject`用于接收数据/方法

   ```vue
   <script setup>
   	// 1. 引入provide
       import { ref, provide } from 'vue'
       // 2. 定义数据/方法
       let 变量名 = ref(值) 
       const 方法名 = () => {}
       // 3. 通过provide提供数据/方法：第一个值为标识符，第二个值为数据/方法/数据+方法（对象形式）
       provide（'数据/方法的key', 变量/方法名)
       // provide（'数据/方法的key', {变量名, 方法名})
   </script>
   ```

   ```vue
   <script setup>
   	// 1. 导入inject
       import { inject } from 'vue'
       // 2. 通过inject接收变量/方法：第一个参数为标识符，第二个参数为默认值
       let 变量/方法名 = inject('数据/方法的key')
       // 3. (变量可省略该步骤)在script中调用接收的方法
       const 新方法名 = () => { 方法名(要传递的值) }
   </script>
   
   <template>
   	<!-- 4. template标签中使用传递过来的方法/变量 -->
   	<button @事件名='新方法名('>{{ 变量名 }}</button>
   </template>
   ```

5. 祖孙通信：`attr`

   ```vue
   <script setup>
   	import { ref } from 'vue'
       import 子组件名称 from '路径'
       let 变量名 = ref(属性值)
   </script>
   
   <template>
   	<!-- 父组件定义数据，并以属性的方式将数据传递给子组件 -->
   	<子组件名称 :变量名='变量名'></子组件名称>
   </template>
   ```

   ```vue
   <script setup>
   	import 孙组件名称 from '路径'
   </script>
   
   <template>
   	<!-- 子组件通过v-bind='$attrs'将父组件的数据传递给孙组件 -->
   	<孙组件名称 v-bind='$attrs'></孙组件名称>
   </template>
   ```

   ```vue
   <script setup>
   	import { defineProps } from 'vue'
       defineProps(['变量名'])
   </script>
   
   <tmeplate>
       <!-- 孙组件通过defineProps接收父组件传递的数据 -->
   	<标签名>{{ 变量名 }}</标签名>
   </tmeplate>
   ```

6. 任意组件通信：`mitt`：使用`mitt`前需要先使用`pnpm i mitt`安装mitt

   ```javascript
   // src/utils/xxx.js
   import mitt from 'mitt'
   const emitter = mitt()
   export default emitter
   ```

   ```javascript
   // main.js
   import emitter from '路径'
   ```

   ```vue
   <script setup>
       import { onUnmounted } from 'vue'
   	// 引入emitter
       import emitter from '路径'
   	// 在任意组件绑定emitter.on、触发emitter.emit或销毁emitter.off事件
       emitter.on('方法名', ()=>{ })
       
       // 需要在组件销毁时销毁事件
       onUnmounted (()=>{ emitter.off('方法名') })
       
       // 在该组件使用emitter绑定的各种事件均可以在其它组件通过emitter.emit('方法名')调用
   </script>
   ```

7. 任意组件通信：`pinia`

   ```javascript
   // src/stores/modules/xxx.js
   import { defineStore } from 'pinia'
   import { ref } from 'vue'
   export const useXxxStore = defineStore('仓库标识' () => { return { 数据/方法 } })
   ```

   ```javascript
   // src/stores/index.js
   import { createPinia } from 'pinia'
   const pinia = createPinia()
   export default pinia
   export * from '@/stores/modules/xxx.js'
   ```

   ```javascript
   // main.js
   import pinia from '@/stores/index.js'
   app.use(pinia)
   ```

   ```vue
   <script setup>
   	import { useXxxStore } from '@/stores/index.js'
       const XxxStore = useXxxStore()
       // 使用pinia中ref定义的数据需要使用toRefs包裹以保持响应性
       let { 数据/ 方法 } = XxxStore
   </script>
   ```

   > pinia持久化需要使用`pnpm i pinia-plugin-persistedstate -D`安装插件，可参考[官网](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)

   ```javascript
   // stores/index.js
   import { createPinia } from 'pinia'
   import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
   const pinia = createPinia()
   pinia.use(piniaPluginPersistedstate)
   ```

   ```javascript
   // src/stores/modules/xxx.js中开启持久化
   export const 仓库名称 = defineStore('仓库标识', () => { // 可以按照vue文件中的方式依次定义数据/方法 }, {persisit:true})

### 3.6 组件路由

1. 路由的基本配置：history模式美观但上线时需要服务端配合、hash模式不美观且seo优化较差，但不需要服务端配合

   ```javascript
   import { createRouter, createWebHistory } from 'vue-router'
   import 初始页面组件名称 from '路径'
   const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
       {name: '初始页面组件名称', path: '/路径', component:组件名称},
       {
         name:'组件名称',
         path: '/路径名称',
         component:() => import('路径'),
         children:[
           {
             name:'嵌套路由组件名称',
             // params传参的写法
             path:'路径名称/:参数名1?/:参数名2?/:参数名43',
             component:() => import('路径')
             props:true 
           }
         ]
       },
       ······
       {path:'/', redirect:'/home' },
       {name:'组件名称', path:'*', component:组件名称}				// 404
     ]
   })
   export default router
   ```

   > 路由的props属性可以让组件更方便地接收参数：添加props属性后可以不需要引入useRoute等，直接使用defineProps接收参数即可

   ```javascript
   // 方式一：将路由收到地所有 params参数 作为props传值给组件；
   props:true  
   // 方式二：可以自行决定将什么作为参数传递给组件，route.params和route.query都可以
   props(route){ return route.params }
   // 方式三：想将什么传递给组件都可以
   props:{ a:100  }
   ```

2. 声明式导航和编程式导航

   - 声明式导航 query传参---接参页面的script标签中使用  this.$route.query.属性名  接收传递过来的参数

     ```vue
     <template>
     	<!-- query传参：push | replace -->
     	<router-link push to='路径/属性名=属性值'></router-link>
     	<router-view>router-link用于设置传参路径，router-view用于设置视图位置</router-view>
     	<!--接参页面模板中通过 {{$route.query.属性名}} 接收参数，script中通过 this.$route.query.属性名 接收参数 -->
     </template>
     ```

     ```VUE
     <template>
     	<!-- params传参：需在index.js中配置路径时将path改为：path:'路径/:属性名?'的格式(问号表示可选) -->
     	<router-link replace to='/路径/属性值'></router-link>
     	<router-view>router-link用于设置传参路径，router-view用于设置视图位置</router-view>
     	<!--接参页面模板中通过 {{$route.params.属性名}} 接收参数，script中通过 this.$route.params.属性名 接收参数 -->
     </template>
     ```

   - 编程式导航

     ```vue
     <script setup>
         // query传参
     	import {useRouter} from 'vue-router'
     	const router = useRouter()
         const 方法名 = () => {
             router.push({
                 // name:'组件名称'
                 path:'/路径',
                 query:{ 属性名:属性值 }
             })
         }
         
         /*
         	import { useRoute } from 'vue-router';	
     		const route = useRoute()
     		// 接参页面的script标签中使用 this.$route.query.属性名 接收参数
         	// 接参页面的模板中使用 {{ $route.query.属性名 }} 接收参数
         */
     </script>
     ```

     ```vue
     <script setup>
         // params传参
     	import {useRouter} from 'vue-router'
     	const router = useRouter()
         const 方法名 = () => {
             router.replace({
                 // name:'组件名称'
             	path:'/路径',
                 params:{ 属性名:属性值 }
             })
         }
         
          /*
         	import { useRoute } from 'vue-router';	
     		const route = useRoute()
     		// 接参页面的script标签中使用 this.$route.params.属性名 接收参数
         	// 接参页面的模板中使用 {{ $route.params.属性名 }} 接收参数
         */
     </script>
     ```

3. `active-class`表示当前路由激活时的样式类名

4. 路由缓存

   路由跳转后，原有组件被销毁；返回该组件时组件被重新创建，数据被重新加载。路由跳转后，希望返回上一路由页面，可以使用

   ```vue
   <script setup>
   	const 方法名 = () => {
           // this.$router.back()
           this.$router.go(-1)
       }
   </script>
   ```

   若希望返回原有组件时，能返回原来的位置，可以使用`keep-alive`将组件缓存下来

   | 属性      | 说明                                             |
   | --------- | ------------------------------------------------ |
   | `include` | 值为组件名构成的数组，只有匹配的组件会被缓存     |
   | `exclude` | 值为组件名构成的数组，任何匹配的组件都不会被缓存 |
   | `max`     | 值为数字，表示最多可以缓存多少组件实例           |

   ```vue
   <template>
     <div>
       <keep-alive :include="['组件名']">
         <router-link to='/路径'></router-link>
       </keep-alive>
     </div>
   </template>
   ```

### 3.7 组件插槽

1. 默认插槽

   - `src/components/xxx.vue`文件中书写公共结构，需要定制的部分使用`<slot>默认内容</slot>`进行替换
   - 需要使用插槽的`.vue`文件中引入`xxx.vue`组件，需要定制的内容使用`<组件名></组件名>`包裹

2. 具名插槽

   - `src/components/xxx.vue`文件中书写公共结构，需要定制的部分使用`<slot name='插槽名称'>默认内容</slot>`替换；

   - 在需要使用插槽的组件引入书写公共结构的组件，需要定制的内容使用以下内容包裹(上下两种方式均可)；

     ```vue
     <template>
     	<组件名>
             <!--  方式一 -->
             <template v-slot:插槽名称>定制内容</template>   
     		<!--  方式二 -->
             <template #插槽名称>定制内容</template> 
         </组件名>
     </template> 
     ```

3. 作用域插槽：作用域插槽多用于数据在子组件，由数据生成的结构在父组件的场景

   - 子组件中以属性的方式传值：`<slot :属性名='变量名'></slot>`
   - 父组件在`template`中接收值：`<template v-slot:插槽名称='{属性名}'></template>`
   - 父组件的`template`中使用接收的值

### 3.8 其它API

1. `defineOptions`：用于配置除`props, emits, expose, slots`外的所有自定义属性，如组件更名

   ```vue
   <script setup>
       defineOptions({  name: "组件名称" });
   </script>
   ```

2. `defineModel`：作用等同于`v-model`的父子组件双向数据绑定

   ```javascript
   // vite.config.js
   plugins: [
     vue({
       script: { defineModel: true }
     }),
   ],
   ```

   ```vue
   <script setup>
   	// 1. 导入子组件；
       import 组件名 from '路径'
       // 2. 定义响应式数据；
       import { ref } from 'vue'
       let 变量名 = ref(值)
       // 3. 通过v-model实现与子组件数据的双向绑定；
       <组件名 v-model='变量名' />
   </script>
   ```

   ```vue
   <script setup>
   	// 1. 导入defineModel
       import { defineModel } from 'vue'
       // 2. 通过defineModel获取
       let 新变量 = defineModel() 
       // 3. 模板中使用（以input输入框为例）
       <input type='text' :value='新变量' @input='e=>新变量=e.target.value' />
   </script>
   ```

3. `customRef`：一般结合`hook`使用，用来实现一些特殊的功能，如使用`useMsgRef`来定义一个响应式数据且有延迟效果

   ```javascript
   // src/hooks/xxx.js：使用useMsgRef来定义一个响应式数据且有延迟效果
   import { customRef } from "vue";
   export default function(initValue,delay){
     let timer
     // track(跟踪)、trigger(触发)
     const msg = customRef((track,trigger)=>{
       return {
         // get何时调用？—— msg被读取时
         get(){
           track()    // 告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
           return initValue
         },
         // set何时调用？—— msg被修改时
         set(value){
           clearTimeout(timer)
           timer = setTimeout(() => {
             initValue = value
             trigger()     // 通知Vue一下数据msg变化了
           }, delay);
         }
       }
     })
     return {msg}
   }
   ```

   ```vue
   <script setup>
   // .vue文件中调用hook
   import useMsgRef from '../hook/index'
   // 使用useMsgRef来定义一个响应式数据且有延迟效果
   let {msg} = useMsgRef('你好',2000)
   </script>
   
   <template>
     <div>
       <h2>{{ msg }}</h2>
   	<input type="text" v-model="msg">
     </div>
   </template>
   ```

4. `markRaw`

   > 正常情况下，使用`ref`或`reactive`包裹后会使原始数据变为响应式数据，但若原始数据被`markRaw`包裹后，再使用`ref`或`reactive`包裹也不会变为响应式数据，即`markRaw`的作用是使某数据永远不能变为响应式数据

   ```vue
   <script setup>
   	import { markRaw } from 'vue'
       let 变量名 = 属性值
       const 方法名 = () => {
           // 若在正常情况之前使用markRaw包裹，则会使某数据永远不能成为响应式数据
           // markRaw(变量名)
   
           // 正常情况下使用ref或reactive包裹会使原始数据变为响应式数据
           console.log('normal', ref(变量名))
       }
   </script>
   ```

5. `toRaw`：使一个响应式对象变为一个不具有响应式的原始对象

   ```vue
   <script setup>
   	import { ref, toRaw } from 'vue'
       let 变量名 = ref(属性值)
       const 方法名 = () => { consle.log(toRaw(变量名)) }
   </script>
   ```

6. `readonly`：根据已有数据，创建一个深度（包括嵌套属性也不能修改）的不可修改的副本，既适用于`ref`，也适用于`reactive`。修改就报错

   ```vue
   <script setup>
   	import { readonly, ref } from 'vue'
       let 变量名1 = ref(属性值)
       const 变量名2 = readonly(变量名1)
       const 方法名 = () => {
           // 原有属性可以修改
           变量名1.value = 新属性值
           // 使用readonly产生的数据不可修改，修改就报错，即变量名2不可修改
       }
   </script>
   ```

7. `shadowReadonly`：根据已有数据，创建一个浅层（嵌套属性可修改）的不可修改的副本，既适用于`ref`，也适用于`reactive`。修改就报错

   ```vue
   <script setup>
   	import { shallowReadonly, ref } from 'vue'
       let 变量名1 = ref(属性值)
       const 变量名2 = shallowReadonly(变量名1)  
       const 方法名 = () => {
           // 原有属性可以修改
           变量名1.value = 新属性值
           // shallowReadonly，修改就报错，但嵌套属性可以修改。
       }
   </script>
   ```

8. `shallowReactive`：定义响应式数据。使用`shallowReactive`定义的数据只会使对象的顶层属性变为响应式的，而嵌套属性不会变成响应式的

   ```vue
   <script setup>
   	import { shallowReactive } from 'vue'
       let 变量名 = shallowReactive({
           // 外部属性名具有响应式
           外部属性名1:外部属性值1,
           外部属性名2:{
               // 内部属性名不具有响应式
               内部属性名1:内部属性值1
           }
       })
   </script>
   ```

9. `shallowRef`：定义响应式数据。使用`shallowRef`定义的数据不关心值内部的属性变化，而只对顶层属性进行响应式处理

   ```vue
   <script setup>
   	import { shallowRef } from 'vue'
       let 变量名 = shallowRef({
           // 外部属性名具有响应式
           外部属性名1:外部属性值1,
           外部属性名2:{
               // 内部属性名不具有响应式
               内部属性名1:内部属性值1
           }
       })
   </script>
   ```

10. `Teleport`：`Teleport`是一种能够将我们的内容移动到指定位置的技术

    ```vue
    <template>
    	<!-- teleport组件的to属性表示将弹框添加到xx中去，如body中 -->
    	<teleport to='body'>
        	<!-- 此处书写要插入到其它位置的内容 -->
        </teleport>
    </template>
    ```

    ```vue
    <script setup>
        <!-- 在其它任意组件引入和使用.vue文件，一般结合v-if或v-show指令来使用 -->
    	import 组件名称 from '路径'
    </script>
    
    <template>
    	<组件名称 />
    </template>
    ```

11. `Suspense`的作用是等待异步组件时渲染一些额外内容，让应用有更好的用户体验。但该组件是一个**实验性组件**！！！

    ```vue
    <script setup>
        // src/components/xxx.vue中书写加载完成要书写的代码
    	import 组件名称 from '路径'
    </script>
    
    <template>
    	<Suspense>
        	
            <template v-slot:fallback>
    			<!-- 数据未返回之前要展示的代码 -->
    		</template>
    
    		<template v-slot:default>
    			<!-- 数据返回之后要展示的代码 -->
    			<组件名称 />
    		</template>
        </Suspense>
    </template>
    ```

### 3.9 其它功能

1. 工程化：清除`node_modules`包用git工具：`rm -rf node_modules`

   - 创建工程：`pnpm create vue`
   - 输入项目名称
   - 依次选择需要安装的配置
   - 安装依赖包：`pnpm i`
   - 启动项目：`pnpm dev`（找`package.json`）

2. 更改组件名称：`pnpm i vite-plugin-vue-setup-extend -D`

   ```javascript
   // vite.config.js
   import vueSetupExtend from 'vite-plugin-vue-setup-extend'
   ······
   export default defineConfig({
   	plugins:[
   		······
   		vueSetupExtend()
   	]
   })
   ```

```vue
<script lang='ts' setup name='新组件名称'></script>
```

3. 自动导包：`pnpm i unplugin-auto-import -D`

   ```javascript
   // // vite.config.js
   import { fileURLToPath, URL } from 'node:url'
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import AutoImport from 'unplugin-auto-import/vite' //++
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [
       vue(),
       //++
       AutoImport({
         /* imports可以配置哪些文件需要自动导包 */
         imports: ['vue', 'vue-router'],
         /* 自定义文件,在这里文件中可以看到不需要导包的变量 */
         dts: 'src/auto-imports.d.ts'
       })
     ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       }
     }
   })
   // 运行项目，会出现auto-imports.d.js文件
   ```

4. 异步更新

   ```vue
   <script setup>
   	import { nextTick } from 'vue'
       nextTick(()=>{  // 异步更新逻辑  })
   </script>
   ```

5. 自动获取焦点

   ```vue
   <template>
     <input type='text' ref='inp' />
   </template>
   
   <script setup>
     import { ref, onMounted, nextTick } from 'vue'
     let inp = null
     onMounted(()=>{
       inp = ref(inp)
       nextTick (()=>{ inp.value.focus() })
     })
   </script>
   ```

6. 全局挂载

   - 方式一：‘原型’上挂载

     ```javascript
     // main.js
     const app = createAPP(APP)
     app.config.globalProperties.属性名 = 属性值
     app.mount('#app')
     ```

     ```vue
     <script setup>
       // 任意组件使用
       import { getCurrentInstance } from 'vue'
       const { proxy } = getCurrentInstance()
       console.log(proxy.属性名)
     </script>
     ```

   - 方式二：使用project和inject完成挂载和使用

     ```javascript
     // main.js
     const app = createAPP(APP)
     app.provide('属性名',属性值)
     app.mount('#app')
     ```

     ```vue
     <script setup>
       // 任意组件使用
       import { inject } from 'vue'
       const 变量名 = inject('属性名')
       console.log(变量名)
     </script>
     ```

7. hook函数

   ```javascript
   // src/hooks/xxx.js
   function useXxx(){
     // 定义数据和方法
     return { 数据名, 方法名 }
   }
   export default useXxx
   ```

   ```vue
   <script setup>
   	// 需要用到hook钩子的组件
       import useXxx from '路径'
       let {数据名, 方法名} = useXxx()
       // 接下来就可以在该组件中任意使用hook中的数据和方法了
   </script>
   ```

8. 获取DOM/组件

   - 获取DOM

     ```vue
     <script setup>
     	// 1. 引入ref和onMounted；
         import { ref, onMounted } from 'vue'
         // 2. 使用ref生成一个ref对象；
         let 变量名= ref(null)
         // 3. 通过ref标识绑定ref对象到DOM；
         <标签名 ref='变量名' />
         // 4. 在onMounted生命周期钩子中使用获取到的DOM；
         onMounted(()=>{ console.log(变量名.value) })
     </script>
     ```

   - 获取组件

     ```vue
     <script setup>
      // 1. 引入子组件
      import 组件名称 from '路径'  
      // 2. 引入ref和onMounted；
      import { ref, onMounted } from 'vue'
      // 3. 通过ref标识绑定ref对象到组件实例；
      <组件名 ref='变量名' />    
      // 5. onMounted生命周期钩子中使用获取到的组件实例及其身上的属性与方法；
      onMounted(()=>{ console.log(变量名.value.数据名称) })
     </script>
     ```

     ```vue
     <script setup>
     	// 4. 默认情况下，子组件内部的属性和方法不对父组件开发，故需使用defineExpose将需要的属性和方法暴露给父组件；
         import { defineExpose } from 'vue'
         defineExpose({ 要暴露给父组件的方法/数据名 })
     </script>
     ```

9. 注册全局组件

   ```javascript
   // main.js
   import 组件名称 from '路径'
   app.component('组件名称', 组件名称)
   ```

   ```vue
   <template>
   	<组件名称 />
   </template>
   ```

10. 自定义插件：一般用于注册多个全局组件

    ```javascript
    // src/components/index.js中引入项目中全部的全局组件
    import 组件名称 from '路径'
    const allGloablComponent = { 组件名称 }
    // 对外暴露插件对象
    export default {
        install(app) {
            // 注册项目全部的全局组件
            Object.keys(allGloablComponent).forEach(key => {
                app.component(key, allGloablComponent[key])
            })
        }
    }
    ```

    ```javascript
    // main.js
    import gloalComponent from '路径'
    app.use(gloalComponent)
    ```

    ```vue
    <template>
    	<组件名称 />
    </template>
    ```



















