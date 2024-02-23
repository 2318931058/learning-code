<template>
  <div id="app">
    <span>根组件</span>
    <!-- 与input输入框绑定 -->
    <input :value="count" @input="handleInput" type="text">
    <hr />

    <Son1></Son1>
    <hr />

    <Son2></Son2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'

export default {
  name: 'app',
  methods: {
    handleInput (e) {
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  },
  computed: {
    ...mapState(['count'])
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
