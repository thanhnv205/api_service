<template>
  <a-switch
    :name="name"
    :checked="checked"
    :size="size"
    class="custom-switch"
  />
</template>

<script setup>
const { name, size, checked } = defineProps(["name", "size", "checked"]);

</script>

<style lang="scss" scoped>
.custom-switch {
  border: 1px solid  var(--bg-linear-secondary);
}

.ant-switch-checked{
  background-color: var(--bg-linear-primary);
  border: 1px solid  var(--bg-linear-primary);
  &:hover {
    background-color: var(--bg-linear-primary) !important;
  }
}
::v-deep(.ant-switch-handle) {
  top: 1px;
}


</style>
