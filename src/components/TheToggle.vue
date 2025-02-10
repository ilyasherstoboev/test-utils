<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div>
    <button @click="show = !show">Toggle</button>

    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
