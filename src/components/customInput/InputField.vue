<template>
  <div
    class="TextInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label :for="name">{{ label }}</label>
    <a-input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps([
  "type",
  "value",
  "name",
  "label",
  "successMessage",
  "placeholder",
]);

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.TextInput {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}

label {
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
}

input {
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

.help-message {
  font-size: 14px;
}

.TextInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextInput.has-error input:focus {
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}

.TextInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.TextInput.success input:focus {
  border-color: var(--success-color);
}

.TextInput.success .help-message {
  color: var(--success-color);
}
</style>
