<script setup lang="ts">
import PostList from '../components/PostList.vue'
import StoreCounter from '../components/StoreCounter.vue'
import ThePassword from '../components/ThePassword.vue'
import TheRouter from '../components/TheRouter.vue'
</script>

<template>
  <div>
    <ThePassword :min-length="8" />
    <PostList />
    <StoreCounter />
    <TheRouter />
  </div>
</template>
