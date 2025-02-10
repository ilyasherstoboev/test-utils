<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps(['isAuthenticated'])

const redirect = () => {
  if (props.isAuthenticated) {
    router.push(`/posts/${route.params.id}/edit`)
  } else {
    router.push('/404')
  }
}
</script>

<template>
  <button @click="redirect">Click to Edit</button>
</template>

<style scoped></style>
