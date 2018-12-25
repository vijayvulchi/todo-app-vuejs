<template>
  <div class="tasks">
    <h3>This file will list all the tasks.</h3>
    <div v-for="task in tasks">
      <p>
        <span><b>{{ task.title }}</b></span><br />
        <span>{{ task.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>

import TasksServices from '@/services/TasksServices'

export default {
  name: 'tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await TasksServices.fetchTasks()
      this.tasks = response.data
    }
  }
}

</script>

<style>

</style>
