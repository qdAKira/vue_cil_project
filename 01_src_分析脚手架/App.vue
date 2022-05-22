<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import Student from './components/Student'
import School from './components/School.vue'
export default {
  name:'App',
  components:{
    School,
    Student
  }
}
</script>

