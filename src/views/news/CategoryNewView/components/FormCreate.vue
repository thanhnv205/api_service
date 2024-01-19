<template>
  <form @submit.prevent="onSubmit" :validation-schema="validationSchema">
    <div class="status">
      <span class="heading-small">Trạng thái</span>
      <FormSwitch
        name="active"
        :checked="values.active"
        size="small"
        v-bind="{ 'onUpdate:checked': handleSwitchChange }"
      />
    </div>

    <InputField
      name="category_name"
      type="text"
      label="Tên danh mục"
      placeholder="Tên danh mục"
      @input="handleChangeSlug"
    />
    <InputField
      name="slug"
      type="text"
      label="Slug (url)"
      placeholder="Slug (url)"
    />
    <TextAreaField
      name="description"
      :rows="4"
      label="Mô tả"
      placeholder="Mô tả"
    />
    <Button html-type="submit" class="submit-btn" type="primary" text="Lưu" />
  </form>
</template>

<script setup>
import { watch } from "vue";
import * as Yup from "yup";
import { useForm } from "vee-validate";

import InputField from "@/components/customInput/InputField.vue";
import TextAreaField from "@/components/customInput/TextAreaField.vue";
import Button from "@/components/customInput/Button.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import { toSlug } from "@/utils/helper.js";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const validationSchema = Yup.object().shape({
  category_name: Yup.string().required("Tên danh mục không được để trống."),
  slug: Yup.string().required("Slug không được để trống"),
});

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    active: true,
    slug: "",
    category_name: "",
    description: "",
  },
  validationSchema,
});

const handleSwitchChange = (isChecked) => {
  setFieldValue("active", isChecked);
};

const handleChangeSlug = (event) => {
  if (event) {
    const newSlug = toSlug(event?.target?.value);
    setFieldValue("slug", newSlug);
  }
};

watch(values, () => {
  handleChangeSlug();
});

const onSubmit = handleSubmit(async (data) => {
  try {
    await axios.post("http://localhost:5000/v1/category-news", data);
    router.back();
  } catch (error) {
    console.error(error);
  }
});
</script>
