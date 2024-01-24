<template>
  <a-button class="btn" :type="defaultType" :size="defaultSize">
    <slot name="icon"></slot>
    {{ text }}
  </a-button>
</template>

<script setup>
import { defineProps } from "vue";
const { text, type, size } = defineProps(["text", "type", "size"]);

const defaultType = type || "primary";
const defaultSize = size || "large";
</script>

<style lang="scss" scoped>
.btn {
  min-width: 100px;
  padding: 0 25px;
  border: 0;
  box-shadow: none;
  border-radius: 5px;
  background: linear-gradient(90deg,var(--bg-linear-primary),var(--bg-linear-primary) 108.33%);
  &:focus-visible {
    outline: none;
  }

}
</style>
