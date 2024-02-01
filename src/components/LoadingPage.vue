<template>
  <div v-if="loading" class="wrapper-loading">
    <a-spin />
  </div>
  <slot></slot>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
</script>

<style scoped>
.wrapper-loading {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
