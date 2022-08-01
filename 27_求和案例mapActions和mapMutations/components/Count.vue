<template>
<div>
   <h2>当前值为：{{sum}}</h2>
   <h2>当前值放大十倍：{{bigSum}}</h2>
   <h3>我在{{school}},学习{{subject}}</h3>
   <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
   </select>
   <button @click="increment(n)">+</button>
   <button @click="decrement(n)">-</button>
   <button @click="incrementOdd(n)">当前值为奇数时+1</button>
   <button @click="incrementWait(n)">等一会加</button>
</div>
 
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name:'Count',
  data() {
    return {
      
      //用户选择的值
      n:1
    }
  },
  computed:{
    // 程序员自己写
    /*sum(){
      return this.$store.state.sum
    },
    bigSum(){
      return this.$store.getters.bigSum
    },
    school(){
      return this.$store.state.school
    },
    subject(){
      return this.$store.state.subject
    }
    */
     //借用mapState和mapGetters
    //借助mapState生成计算属性：sum、school、subject（对象写法）,此时key值为名，用在插值语法中
    // ...mapState({he:'sum',xuexi:'school',xx:'subject'})
    // ...mapState({sum:'sum',school:'school',subject:'subject'})
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject']),

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    ...mapGetters({bigSum:'bigSum'})
    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    // ...mapGetters(['bigSum'])
  },
 

  methods: {
//程序员自己写
/*
    increment(){
      //使用dispatch需要进入actions对象中，由它进行调用
      this.$store.dispatch('jia',this.n)
    },
    decrement(){
      //使用commit则直接进入mutations对象中，由它进行调用
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd(){
      this.$store.dispatch('odd',this.n) 
    },
    incrementWait(){
    
      this.$store.dispatch('wait',this.n)
    },
    */
   //借助mapActions生成：incrementOdd、incrementWait（对象形式）
   //传参借助绑定事件，mapMutataios的作用就是自动生成这个increment函数，但是需要在点击事件调用的时候传值
    ...mapActions({increment:'jia',incrementOdd:'odd',incrementWait:'wait'}),

    ...mapMutations({decrement:'JIAN'})
    
   //借助mapActions生成：incrementOdd、incrementWait（数组形式）需要修改上方对应回调名
  //  ...mapActions(['jia','odd','wait']),
  //  ...mapMutations(['JIAN'])
  },
}
</script>

<style>
button{
  margin-left: 5px;
}
</style>