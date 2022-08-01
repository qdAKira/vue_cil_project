<template>
  <div>
  
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
  <Student @atguigu="getStudentName"/>
  <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
  <!-- <School ref="getSchoolName"/> -->
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
      studentName:'',
      schoolName:''
    }
  },
  components:{
    Student,
    School
  },
  methods: {
    getStudentName(name,...param){
      console.log('我收到Student组件中传来的消息',name,...param);
      this.studentName = name
    },
    // getSchoolName(name,...param){
    //    console.log('我收到School组件中传来的消息',name,...param);
    //   this.schoolName = name
    // }

  },
  // mounted() {
  //   this.$refs.getStudentName.$on('haha',this.getSchoolName)
  // },
  
}
</script>

