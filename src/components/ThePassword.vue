<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  minLength: {
    type: Number,
    required: true,
  },
})

const password = ref('')

const error = computed(() => {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters.`
  }
  return ''
})
</script>

<template>
  <div>
    <input v-model="password" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>
