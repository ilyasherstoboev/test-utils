<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('world!')
</script>

<template>
  <div>
    <h1>
      <slot name="welcome" v-bind="{ text: msg }" />
    </h1>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
