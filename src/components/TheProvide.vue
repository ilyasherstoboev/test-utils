<script setup lang='ts'>
import { provide } from 'vue';

provide('my-key', 'some-data')
</script>

<template>
  <div>
    <slot />
  </div>
</template>
