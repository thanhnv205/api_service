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
  border-radius: 5px;
  border: 0;
  box-shadow: none;
  border-color: var(--bg-linear-primary);
  background: linear-gradient(
    90deg,
    var(--bg-linear-primary),
    var(--bg-linear-primary) 108.33%
  );

  &:focus-visible {
    outline: none;
  }
  &.ant-btn-lg {
    min-width: 100px;
    padding: 0 25px;
  }
  &.ant-btn-sm {
    min-width: auto;
    min-height: 35px;
    padding: 0 15px;
  }
}
</style>
