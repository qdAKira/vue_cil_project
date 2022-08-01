//引入vue核心库
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
//准备actions对象---为响应组件中用户的动作
const actions = {
  jia(context,value){
    context.commit('JIA',value)
  },
  odd(context,value){
    if (context.state.sum%2) {
      context.commit('ODD',value)
    }
  },
  wait(context,value){
    context.commit('WAIT',value)
  },
}
//准备mutations对象---用于修改state数据（state）
const mutations = {
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
}
//准备state对于----用于保存具体数据
const state = {
  //当前值
    sum:0,
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})