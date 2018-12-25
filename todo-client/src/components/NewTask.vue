<template>
  <div class="tasks">
    <p class="title-light">Add Task</p>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div class="align-right">
          <button class="btn btn-small" @click="cancelTask">Cancel</button>
          <button class="btn btn-small" @click="addTask">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import TasksService from '@/services/TasksServices'
export default {
  name: 'NewTask',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addTask () {
      await TasksService.addTask({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Tasks' })
    },
    async cancelTask () {
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
<style>
input,
textarea {
  width: 100%;
  min-height: 35px;
  max-height: 200px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  border: 0;
  resize: none;
}
</style>
