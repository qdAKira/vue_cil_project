<template>
   <div>
       <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showN">点我提示信息</button>
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
          }
        }
}
</script>

