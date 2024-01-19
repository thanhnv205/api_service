<template>
  <label :for="name">{{ label }}</label>
  <a-textarea
    :rows="rows"
    :name="name"
    :id="name"
    :value="inputValue"
    :placeholder="placeholder"
    @input="handleChange"
    @blur="handleBlur"
  />
</template>

<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps(["rows", "value", "name", "label", "placeholder"]);
const name = toRef(props, "name");

const {
  value: inputValue,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>
