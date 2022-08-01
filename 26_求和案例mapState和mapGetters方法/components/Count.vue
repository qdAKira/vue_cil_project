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
   <button @click="increment">+</button>
   <button @click="decrement">-</button>
   <button @click="incrementOdd">当前值为奇数时+1</button>
   <button @click="incrementWait">等一会加</button>
</div>
 
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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

  },
}
</script>

<style>
button{
  margin-left: 5px;
}
</style>