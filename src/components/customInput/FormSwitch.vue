<template>
  <a-switch :checked="checked" :size="size" class="custom-switch" />
</template>
<script setup>
const { size, checked } = defineProps(["size", "checked"]);
</script>

<style lang="scss" scoped>
.custom-switch .ant-switch-inner {
  background-color: #ccc;
}
</style>
