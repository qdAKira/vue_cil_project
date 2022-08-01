<template>
  <div>
    <Student/>
    <School/>
  </div>
</template>

<script>
//引入组件
import Student from './components/Student'
import School from './components/School'

export default {
  name:'App',
  data(){
    return {
      msc:'哈哈',
    }
  },
  components:{
    Student,
    School
  },
  
}
</script>

