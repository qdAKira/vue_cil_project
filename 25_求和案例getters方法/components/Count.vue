<template>
<div>
   <h2>当前值为：{{$store.state.sum}}</h2>
   <h2>当前值放大十倍：{{$store.getters.bigSum}}</h2>
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
export default {
  name:'Count',
  data() {
    return {
      
      //用户选择的值
      n:1
    }
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