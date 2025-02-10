<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['focus-lost'])
const value = ref('')

const handleBlur = (event) => {
  if (event.relatedTarget.tagName === 'BUTTON') {
    emits('focus-lost')
  }
}
</script>

<template>
  <form>
    <input type="text" v-model="value" @blur="handleBlur" />
    <button>Submit</button>
  </form>
</template>
