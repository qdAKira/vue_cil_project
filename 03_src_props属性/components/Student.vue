<template>
  <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <h2>{{msg}}</h2>
	  <button @click="updateAge">尝试修改收到的年龄</button>
    
  </div>
</template>

<script>
export default {
  name:'Student',
   data(){
        return{
         age:this.age,
          msg:'自身信息'
        }
      },
      props:['name','age'],
    
		methods: {
			updateAge(){
				this.age++
			}
		}
    	//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		// props:{
		// 	name:{
		// 		type:String, //name的类型是字符串
		// 		required:true, //name是必要的
		// 	},
		// 	age:{
		// 		type:Number,
		// 		default:99 //默认值
		// 	},
		// 	sex:{
		// 		type:String,
		// 		required:true
		// 	}
		// }
}
</script>

