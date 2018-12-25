<template>
  <div class="tasks">
    <div class="tasks-card" v-for="task in tasks">
      <h4>{{ task.title }}</h4>
      <p>{{ task.description }}</p>
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
.tasks-card {
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  background-color: #ffffff;
}
.tasks-card h4 {
  margin-bottom: 5px;
}
</style>
