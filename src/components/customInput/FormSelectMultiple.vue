<template>
  <div class="TextInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <span class="label">{{ label }}</span>
    <a-select mode="multiple" :name="name" class="custom-select"
      v-model:value="inputValue" show-search :placeholder="label"
      :options="options" :filter-option="filterOption" @change="handleChange"
      @popupScroll="popupScroll" />

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>
<script setup>
import { ref, computed, toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps([
  "type",
  "value",
  "name",
  "label",
  "successMessage",
  "placeholder",
  'options',
  'mode'
]);
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name);

const options = computed(() => {
  const { options } = props

  return options.map(item => ({
    value: item._id,
    label: item.category_name
  }))
})


const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
}

</script>

<style scoped>
.TextInput {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}

.label {
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}

.custom-select {
  width: 100%;
}

::v-deep(.ant-select-selector) {
  height: 40px !important;
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

::v-deep(.ant-select-selection-item) {
  display: flex;
  align-items: center;
  padding: 3px 5px !important
}

.TextInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.help-message {
  font-size: 14px;
}

.TextInput.has-error input:focus {
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}
</style>
