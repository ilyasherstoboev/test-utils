<script setup lang="ts">
import PostList from './components/PostList.vue'
import ThePassword from './components/ThePassword.vue'
</script>

<template>
  <div>
    <ThePassword :min-length="8" />
    <PostList />
  </div>
</template>
