<script setup lang="ts">
import PostList from './components/PostList.vue'
import StoreCounter from './components/StoreCounter.vue'
import ThePassword from './components/ThePassword.vue'
</script>

<template>
  <div>
    <ThePassword :min-length="8" />
    <PostList />
    <StoreCounter />
  </div>
</template>
