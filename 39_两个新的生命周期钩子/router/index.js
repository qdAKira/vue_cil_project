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
              path:'detail/:id/:title',  //使用占位符声明接受params参数
              component:Detail,
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:'1'}
              //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件(不能传query参数)
              // props:true
              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              // props($route){
              //   return {
              //     id:$route.params.id,
              //     title:$route.params.title
              //   }
              // }
              //进行解构赋值{params}
              props({params}){
                return {
                  id:params.id,
                  title:params.title,
                  a:'1'
                }
              }
            }
          ]
        }
      ]
    }
  ]

})