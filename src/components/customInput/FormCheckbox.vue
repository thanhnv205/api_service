<template>
  <a-checkbox class="checkbox" :checked="checked" @change="handleChange">
    <span class="label">{{ label }}</span>
  </a-checkbox>
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { modelValue, label } = defineProps(['modelValue', 'label']);
const emit = defineEmits();

const checked = ref(modelValue);

const handleChange = (e) => {
  checked.value = e.target.checked;
  emit('update:modelValue', e.target.checked);
};
</script>
  

<style scoped lang="scss">
.label {
  color: #fff;
}
</style>