<script setup lang="ts">
import { useStore } from '../stores/store'

const store = useStore()

const increment = store.counter.increment
</script>

<template>
  <div>
    <button @click="increment">up</button>
    Count: {{ store.counter.count }}
  </div>
</template>
