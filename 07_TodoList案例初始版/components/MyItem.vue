<template>
  <li >
    <label>
        <input type="checkbox" :checked="todo.done"@change="handlecheck(todo.id)"/>
        <span>{{todo.title}}</span>
    </label>
        <button class="btn btn-danger"@click="handleDelect(todo.id)">删除</button>
   </li>
</template>

<script>
export default {
   name:'MyItem',
   //接受todo数据
   props:['todo','checkTodo','delectTodo'],
   methods: {
     handlecheck(id){
       //通知App组件将对应的todo对象的done值取反
       this.checkTodo(id)
     },
     handleDelect(id){
       if(confirm('是否删除')){
         this.delectTodo(id)
       }
     }
   },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color:#ddd;
}
li:hover button{
  /* background-color: red; */
  display: block;
}
</style>