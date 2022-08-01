//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({

  routes: [
    {
      path:'/about',//可随意设置，不用首字母大写
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[//通过children配置子级路由
        {
          path:'news',//此处一定不要写：/news
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'haha',
              path:'detail',
              component:Detail
            }
          ]
        }
      ]
    }
  ]

})