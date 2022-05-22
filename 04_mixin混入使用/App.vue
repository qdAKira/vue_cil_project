<template>
  <div>
   
    <Student name="王老五" :age="19"></Student>
    
  </div>
</template>

<script>
//引入组件
import Student from './components/Student'

export default {
  name:'App',
  components:{
    Student
  }
  
}
</script>

