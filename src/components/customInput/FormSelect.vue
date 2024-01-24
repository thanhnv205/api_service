<template>
  <span class="label">{{ label }}</span>
  <a-select
    class="custom-select"
    v-model:value="value"
    show-search
    placeholder="Select a person"
    :options="options"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
</template>
<script setup>
const props = defineProps(["label"]);

import { ref } from "vue";
const options = ref([
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
]);
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref(undefined);
</script>

<style scoped lang="scss">
.label {
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}
.custom-select {
  width: 100%;
  margin-bottom: 20px;
}

::v-deep(.ant-select-selector) {
  height: 40px !important ;
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-shadow: none !important;
  border-color: #d9d9d9 !important;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #374957 !important;
    box-shadow: none;
  }
}

::v-deep(.ant-select-selection-placeholder) {
  font-size: 15px !important;
  padding: 8.78px 0 !important;
  line-height: initial !important;
}

::v-deep(.ant-select-selection-item) {
  font-size: 15px !important;
  padding: 7px 0 !important;
  line-height: unset !important;
}

::v-deep(.ant-select-selection-search-input) {
  height: 100% !important;
  padding: 7px 0px !important;
  font-size: 15px !important;
}

::v-deep(.ant-select-arrow) {
  font-size: 15px !important;
}
</style>
