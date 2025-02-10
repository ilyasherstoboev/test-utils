<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['increment'])
const count = ref(0)

const handleClick = () => {
  count.value += 1
  emits('increment', {
    count: count.value,
    isEven: count.value % 2 === 0,
  })
}
</script>

<template>
  <div>
    <button @click="handleClick">Increment</button>
    <label>Count: {{ count }}</label>
  </div>
</template>
