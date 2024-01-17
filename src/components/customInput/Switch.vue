<template>
  <a-switch
    v-model:checked="checked"
    :size="props.size"
    class="custom-switch"
  />
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["size"]);

const checked = ref(true);
</script>

<style lang="scss" scoped>
.custom-switch .ant-switch-inner {
  background-color: #ccc;
}
</style>
