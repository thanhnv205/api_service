<template>
  <a-switch
    :name="name"
    :checked="checked"
    :size="size"
    class="custom-switch"
    @change="handleChange"
  />
</template>

<script setup>
const { name, size, checked } = defineProps(["name", "size", "checked"]);
const emit = defineEmits();

const handleChange = (isChecked) => {
  emit("update:checked", isChecked);
};
</script>
