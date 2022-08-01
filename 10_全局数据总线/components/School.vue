<template>
  <div class="demo">
      <h2>学校名字：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">点击发送school信息</button>
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
  methods: {
    sendSchoolName(){
      this.$bus.$emit('haha',this.name)
    }
  },
     
}
</script>

<style scoped>
  .demo{
    background-color: #bfa;
  }
</style>

