<template>
  <div class="heading" :style="style">
    <span class="heading-title">{{ title }}</span>
    <span class="heading-line" />
  </div>
</template>

<script setup>
const props = defineProps(['title', 'style'])
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  align-items: center;
  margin: 40px 0 15px;

  &-title {
    color: #8e8e8e;
    font-size: 12px;
    padding-right: 15px;
  }

  &-line {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }
}
</style>