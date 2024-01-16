<template>
  <a-layout-header class="header">
    <div class="logo" />
    <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal">
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu> -->
  </a-layout-header>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["selectedKeys"]);
const selectedKeys = ref(props.selectedKeys);
</script>
