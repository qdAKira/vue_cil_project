<template>
  <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
 
    
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
  name:'Student',
   data(){
        return{
         name:'张三',
         age:'19'
        
        }
      },
      mixins:[hunhe]
     
    
	
	
}
</script>

