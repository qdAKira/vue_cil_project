//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
  mode:'history',  //不写mode默认为hash模式
  routes: [
    {
      name:'guangyu',
      path:'/about',//可随意设置，不用首字母大写
      component:About,
      meta:{title:'关于',isAuth:true},
      //独享路由守卫
      // beforeEnter: (to, from, next) => {
      //   console.log('独享路由守卫',to,from,next);
      //     if(to.meta.isAuth){//判断是否需要鉴权
      //       if(localStorage.getItem('school')==='atguigu'){
      //         next()
      //       }else{
      //         alert('学校名不对，无权查看')
      //       }
      //     }else{
      //       next()
      //     }
      // }
    },
    {
      name:'zhuye',
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children:[//通过children配置子级路由
        {
          name:'xinwen',
          path:'news',//此处一定不要写：/news
          component:News,
          meta:{isAuth:true,title:'新闻'}
        },
        {
          name:'xinxi',
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'信息'},
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
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//   console.log('前置路由守卫',to,from,next);
//   if(to.meta.isAuth){//判断是否需要鉴权
//     if(localStorage.getItem('school')==='atguigu'){
//       next()
//     }else{
//       alert('学校名不对，无权查看')
//     }
//   }else{
//     next()
//   }
// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to)=>{
  //document.title原生操纵网页标题
  document.title = to.meta.title || '硅谷系统'
})

export default router