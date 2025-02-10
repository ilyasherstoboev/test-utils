<script lang="ts" setup>
import { ref, computed } from 'vue'

const emits = defineEmits(['signup'])
const username = ref('')

const error = computed(() => {
  return username.value.length < 8
})

const submit = () => {
  if (!error.value) {
    emits('signup', username.value)
  }
}
</script>


<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model="username" />
    </form>
  </div>
</template>
