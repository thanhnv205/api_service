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

<style lang="scss" scoped>
label {
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}
textarea {
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 7px 10px;
  outline: none;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #374957;
    box-shadow: none;
  }
}
</style>
