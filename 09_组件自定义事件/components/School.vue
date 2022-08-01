<template>
  <div class="demo">
      <h2>学校名字：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <!-- <button @click="sendSchoolName">点我发送学校名字</button>	 -->
  </div>
</template>

<script>
export default {
  name:'School',
   data(){
        return{
         name:'南通',
         address:'启东'
        }
      },

    //  methods: {
    //    sendSchoolName(){
    //      this.$emit('haha',this.name,777,888)
    //    }
    //  }, 
     
}
</script>

<style scoped>
  .demo{
    background-color: #bfa;
  }
</style>

