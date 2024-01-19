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
  padding: 0 25px;
  border-radius: 5px;
  background-color: #ccc;
  min-width: 100px;
}
</style>
