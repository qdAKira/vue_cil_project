//引入vue核心库
import { nanoid } from 'nanoid'
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
//准备actions对象---为响应组件中用户的动作
//准备mutations对象---用于修改state数据（state）
//准备state对于----用于保存具体数据

//求和相关配置
const CountAbout = {
  //开启命名空间，默认为false
  namespaced:true,
  actions:{
    jia(context,value){
      context.commit('JIA',value)
    },
    odd(context,value){
      if (context.state.sum%2) {
        context.commit('ODD',value)
      }
    },
    wait(context,value){
      setTimeout(() => {
        context.commit('WAIT',value) 
      }, 500); 
    },
  },
  mutations:{
    JIA(state,value){
      console.log('mutations中JIA被调用');
      state.sum += value
    },
    JIAN(state,value){
      console.log('mutations中JIAN被调用');
      state.sum -= value
    },
    ODD(state,value){
      console.log('mutations中ODD被调用');
      state.sum += value
    },
    WAIT(state,value){
      console.log('mutations中WAIT被调用');
      state.sum += value
    },
  },
  state:{
    sum:0,
    school:'南通',
    subject:'vue',
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  }
}
//人员相关配置
 const PersonAbout = {
  //开启命名空间，默认为false
  namespaced:true,
   actions:{},
   mutations:{
    ADD_PERSON(state,value){
      console.log('mutations中ADD_PERSON被调用');
      state.personList.unshift(value)
    }
   },
   state:{
    personList:[
      {id:nanoid(),name:'张三'}
    ]
   },

 }
export default new Vuex.Store({
  modules:{
    PersonAbout:PersonAbout,
    CountAbout:CountAbout
  }
})