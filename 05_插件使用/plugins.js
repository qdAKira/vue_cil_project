export default {
  install(Vue,x){
    console.log(x);
    	//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
  }
}