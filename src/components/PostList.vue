<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { REQUEST_OPTIONS } from '../../app/options/requests.ts'

interface IData {
  id: number
  title: string
}

const posts = ref<IData[]>([])
const loading = ref(false)

const getPosts = async () => {
  loading.value = true
  const { data } = await axios.get('/api/posts', REQUEST_OPTIONS)
  posts.value = data
  loading.value = false
}
</script>

<template>
  <div>
    <button :disabled="loading" @click="getPosts">Get posts</button>
    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
