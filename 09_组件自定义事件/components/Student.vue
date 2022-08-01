<template>
  <div class="demo">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStudentName">点我发送学生姓名</button>
      <button @click="unBind">解绑</button>
  </div>
</template>

<script>
export default {
  name:'Student',
   data(){
        return{
         name:'张三',
         age:'18'
        }
      },

    methods: {
      sendStudentName(){
        this.$emit('atguigu',this.name,666,777)
      },
      unBind(){
        this.$off('atguigu')
      }
    },  
     
}
</script>

<style scoped>
  .demo{
    background-color: blue;
  }
</style>

