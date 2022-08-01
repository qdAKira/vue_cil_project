<template>
  <div>
   <h2>人员列表</h2>
   <h3 style="color:red">Count组件求和为:{{sum}}</h3>
   <input type="text"placeholder="请输入名字" v-model="name">
   <button @click="add">点我添加名字</button>
   <ul>
     <li v-for="p in  personList":key="p.id">{{p.name}}</li>
   </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name:'PersonList',
  data() {
    return {
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum
    }
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('ADD_PERSON',personObj),
      this.name = ''
  },
}
}
</script>

