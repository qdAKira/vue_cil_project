<template>
  <div>
    <Count/>
    <hr>
    <PersonList/>
  </div>
</template>

<script>
import Count from './components/Count'
import PersonList from './components/PersonList'
	export default {
		name:'App',
    components:{Count,PersonList},
   
	
}
</script>


