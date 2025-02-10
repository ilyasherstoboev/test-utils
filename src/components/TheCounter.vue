<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['increment'])
const count = ref(0)

const handleClick = () => {
  count.value += 1
  emits('increment', {
    count: count.value,
    isEven: count.value % 2 === 0
  })
}
</script>

<template>
  <button @click="handleClick">Increment</button>
</template>
