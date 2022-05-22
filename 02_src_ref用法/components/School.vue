<template>
   <div>
       <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showN">点我提示信息</button>
        <button ref="btn" @click="showRef">点我出好康的</button>
        <!-- ref用于获取节点 -->
        <button ref="sch"></button>
       
        
    </div>
</template>

<script>
export default {

      name:'School',
        data(){
          return{
            name:'sws',
            address:'南通'
          }
        },
        methods: {
          showN(){
            alert(this.name)
          },
          showRef(){
            console.log(this.$refs.btn);
            console.log(this.$refs.sch);
            console.log(this.$refs.Sch);
          }
        }
}
</script>

