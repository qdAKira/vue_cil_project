<template>
  
   <ul class="todo-main">
      <MyItem v-for="todoObj in todos":key="todoObj.id":todo="todoObj":checkTodo="checkTodo":delectTodo="delectTodo"/>
    </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
   name:'MyList',
   components:{MyItem},
   props:['todos','checkTodo','delectTodo']
  //   data() {
  //   return {
  //     //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
  //     todos:[
  //       {id:'001',title:'吃饭',done:true},
  //       {id:'002',title:'睡觉',done:false},
  //       {id:'003',title:'打游戏',done:true}
  //     ]
  //   }
  // },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>