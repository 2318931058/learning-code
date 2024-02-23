<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text" v-model="inpValue">
      <button @click="toSearch">搜索一下</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data () {
    return {
      inpValue: ''
    }
  },
  methods: {
    toSearch () {
      // 基本跳转 ----------------------------------------------------------------------------------
      // path路径跳转(简写形式)
      // this.$router.push('/search')

      // path路径跳转(完整形式---适合传参时使用)
      // this.$router.push({
      //   path:'/search'
      // })

      // 命名路由跳转---需要先配置路由路径的name属性
      // this.$router.push({
      //   name:'searchView'
      // })

      // path路径跳转传参 ----------------------------------------------------------------------------------
      // 1.1 query传参(简写)----this.$router.push(`/路径?参数名1=参数值&参数2=参数值`)
      // this.$router.push(`/search?key=${this.inpValue}`)

      // 2.2 query传参(完整写法)---this.$router.push({path:'/路径', query:{参数名1:'参数值',参数名2:'参数值'}})
      // this.$router.push({
      //   path:'/search',
      //   query:{
      //     key:this.inpValue
      //   }
      // })

      // 3.1 动态路由传参(简写)---需要先配置路由路径---this.$router.push(`/路径/参数值`)
      // this.$router.push(`/search/${this.inpValue}`)

      // 4.1 动态路由传参(完整写法)---需要先配置路由路径---this.$router.push({path:`/路径/参数值`})
      // this.$router.push({
      //   path:`/search/${this.inpValue}`
      // })

      // name命名路由跳转传参 ----------------------------------------------------------------------------------
      // 5.1 query传参---this.$router.push({name:'路由名称',query:{参数名1:'参数值1',参数名2:'参数值2'}})
      // this.$router.push({
      //   name:'searchView',
      //   query:{
      //     key:this.inpValue
      //   }
      // })

      // 6.1 动态路由传参---this.$router.push({name:'路由名称',params:{参数名1:'参数值1'}})
      this.$router.push({
        name: 'searchView',
        params: {
          words: this.inpValue
        }
      })
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('../assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
</style>
