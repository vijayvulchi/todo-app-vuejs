<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>

<script>
	import TodoList from './TodoList.vue'

	export default {
	  components: {
	    TodoList
	  }
	}
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
}
</style>