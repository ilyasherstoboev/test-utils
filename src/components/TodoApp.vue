<script setup lang="ts">
import { ref, reactive } from 'vue'

const newTodo = ref('')
const todos = reactive([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
])

const createTodo = () => {
  todos.push({
    id: todos.length + 1,
    text: newTodo.value,
    completed: false,
  })

  newTodo.value = ''
}
</script>

<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input type="text" data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>
