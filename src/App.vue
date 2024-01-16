<script setup>
import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<style scoped></style>
