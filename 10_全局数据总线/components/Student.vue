<template>
  <div class="demo">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
   
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
  mounted() {
    this.$bus.$on('haha',(data)=>{
      console.log('我收到来自school的信息',data);
    })
  },
   beforeDestroy() {
     this.$bus.$off('haha')
   },
     
}
</script>

<style scoped>
  .demo{
    background-color: blue;
  }
</style>

