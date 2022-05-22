<template>
  <div>
    <School></School>
    <Student></Student>
    <button @click="btn">app中好康的</button>
    <Student ref="std"></Student>
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
  },
  methods: {
    btn(){
      console.log(this.$refs.std);
    }
  },
  
}
</script>

