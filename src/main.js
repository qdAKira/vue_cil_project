// 该文件是整个项目的入口
// 引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入vuex
// import store from './store'

//引入VueRouter
// import VueRouter from 'vue-router'

//引入router
// import router from './router'

//引入element-ui插件
// import ElementUI from 'element-ui';
//引入全部样式
// import 'element-ui/lib/theme-chalk/index.css';

import {Button} from 'element-ui'
Vue.component(Button.name, Button)

//使用vue-router插件
// Vue.use(VueRouter)

//使用ui插件
// Vue.use(ElementUI)

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
  //使用vuex
  // store,
  //开启全局事件总线
//  beforeCreate() {
//    Vue.prototype.$bus = this
//  },
//使用router
//  router:router
  
})