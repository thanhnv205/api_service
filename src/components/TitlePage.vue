<template>
  <span :style="{ 'padding-bottom': pb }" :class="['title-page', size]">
    {{ title }}
  </span>
</template>

<script setup>
  defineProps(['title', 'size','pb']);
</script>

<style lang="scss" scoped>
.title-page {
  display: inline-block;
  font-weight: 600;
  line-height: 1.2;
  margin-right: 20px;
  &.small {
    font-size: 13px;
  }
  &.normal {
    font-size: 15px;
  }
}
</style>
