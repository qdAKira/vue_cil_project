<template>
  <div>
      <h2>学生姓名：{{sName}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name:'Student',
   data(){
        return{
          sName:'jjj',
          age:18
        }
      }
}
</script>

