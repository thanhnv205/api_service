<template>
  <div class="TextInput" :class="{ 'has-error': !!errorMessage }">
    <label :for="name">{{ label }}</label>
    <a-date-picker
      v-model:value="dateValue"
      :placeholder="placeholder"
      @blur="handleBlur"
      @input="handleChange"
      format="DD/MM/YYYY"
    />
    <p class="help-message" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref, toRef, defineProps } from "vue";
import { useField } from "vee-validate";
import dayjs from 'dayjs'



const props = defineProps([
  "value",
  "name",
  "label",
  "placeholder",
]);
const name = toRef(props, "name");

const {
  value: dateValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, {
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

.ant-picker {
  height: 40px;
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

.TextInput.has-error .input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextInput.has-error .input:focus {
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}

.TextInput.success .input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.TextInput.success .input:focus {
  border-color: var(--success-color);
}

.TextInput.success .help-message {
  color: var(--success-color);
}
</style>
