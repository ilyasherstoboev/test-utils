<script setup lang="ts">
import ThePassword from './components/ThePassword.vue'
</script>

<template>
  <div>
    <ThePassword :min-length="8" />
  </div>
</template>
