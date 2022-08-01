//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
export default new VueRouter({

  routes: [
    {
      path:'/About',
      component:About
    },
    {
      path:'/Home',
      component:Home
    }
  ]

})