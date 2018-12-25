<template>
  <div class="tasks">
    <div class="align-right">
      <router-link v-bind:to="{ name: 'NewTask' }" class="btn btn-small">Add Task</router-link>
    </div>
    <div v-if="tasks.length > 0">
      <div class="task-card" v-for="task in tasks">
        <div>
          <p><b>{{ task.title }}</b></p>
          <p>{{ task.description }}</p>
        </div>
        <div>
          <router-link v-bind:to="{ name: 'EditTask', params: { id: task._id } }">Edit</router-link> |
          <a href="#" @click="deleteTask(task._id)">Delete</a>
        </div>
      </div>
    </div>
    <div v-else class="task-card">
      <p>There are no Tasks...</p>
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
      this.tasks = response.data.tasks
    },
    async deleteTask (id) {
      await TasksServices.deleteTask(id)
      this.getTasks()
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
<style type="text/css">
.title-light {
  color: #ffffff;
}
.task-card {
  margin: 15px 0 0;
  padding: 15px;
  box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  background-color: #ffffff;
  overflow: hidden;
}
.task-card > div {
  display: inline-block;
  vertical-align: top;
}
.task-card > div:first-child {
  width: calc(100% - 98px);
}
.task-card > div:last-child {
  width: 90px;
}
.task-card h4 {
  margin-bottom: 5px;
}
.align-right {
  text-align: right;
}
.btn {
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #ffffff;
  box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  color: #333333;
}
</style>
