// 该文件是整个项目的入口
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象----vm
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//创建Vue实例对象----vm

new Vue({
  el:'#app',
  render:a=>a(App),
  beforeCreate() {
    //绑定全局事件总线
    Vue.prototype.$bus = this
  },
})