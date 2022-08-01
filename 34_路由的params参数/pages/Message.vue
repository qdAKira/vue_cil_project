<template>
  <div>
    <ul>
      <li v-for="m in messageList":key="m.id">
        <!-- 跳转并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
     <!-- 跳转并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

          <!-- 跳转并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            //简化前 (不能使用)
            //path:'/home/message/detail',
            //简化后
            name:'haha',
            params:{
              id:m.id,
              title:m.title
            }
          }">
          {{m.title}}
        </router-link>
        
      </li>
    </ul>
    <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
      return {
        messageList:[
          {id:'001',title:'消息1'},
          {id:'002',title:'消息2'},
          {id:'003',title:'消息3'}
        ]
      }
    },
}
</script>