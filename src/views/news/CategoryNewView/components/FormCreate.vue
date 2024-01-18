<template>
  <div>
    <Form
      @submit="handleSubmit(onSubmit)"
      :validation-schema="validationSchema"
    >
      <div class="status">
        <span class="heading-small">Trạng thái</span>
        <FormSwitch size="large" v-model:checked="values.active" />
      </div>
      <InputField
        name="category_name"
        type="text"
        label="Tên danh mục"
        placeholder="Tên danh mục"
      />
      <InputField
        name="slug"
        type="text"
        label="Slug (url)"
        placeholder="Slug (url)"
      />
      <InputField
        name="description"
        type="text"
        label="Mô tả chi tiết"
        placeholder="Mô tả chi tiết"
      />

      <Button html-type="submit" class="submit-btn" type="primary" text="Lưu" />
    </Form>
  </div>
</template>

<script setup>
import * as Yup from "yup";

import { useForm, Form } from "vee-validate";
import InputField from "@/components/customInput/InputField.vue";
import Button from "@/components/customInput/Button.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";

const validationSchema = Yup.object().shape({
  category_name: Yup.string().required("Tên danh mục không được để trống."),
  slug: Yup.string().required("Slug không được để trống"),
});

const { handleSubmit, values, errors } = useForm({
  initialValues: {
    active: true,
    slug: "",
    category_name: "",
    description: "",
  },
  validationSchema,
});

const onSubmit = handleSubmit(async (data) => {
  console.log("Form submitted successfully:", data);
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
