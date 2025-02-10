<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/tests">Go to test</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
