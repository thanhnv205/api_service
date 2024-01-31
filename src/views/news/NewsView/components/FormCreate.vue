<template>
  <form @submit.prevent="onSubmit" :validation-schema="validationSchema">
    <a-row :gutter="20">
      <a-col :span="24">
        <div class="status">
          <span class="heading-small">Trạng thái</span>
          <FormSwitch
            name="active"
            :checked="values.active"
            v-bind="{ 'onUpdate:checked': handleSwitchChange }"
          />
        </div>
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="post_name"
          type="text"
          label="Tên bài viết"
          placeholder="Tên bài viết"
          @input="handleChangeSlug"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="slug"
          type="text"
          label="Slug (url)"
          placeholder="Slug (url)"
        />
      </a-col>

      <a-col :span="24">
        <UploadFile />
      </a-col>

      <a-col :span="24">
        <TextAreaField
          name="description"
          :rows="4"
          label="Mô tả"
          placeholder="Mô tả"
        />
      </a-col>

      <a-col :span="24">
        <div class="container-editor">
          <span class="heading-form">Nội dung</span>

          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          />
        </div>
      </a-col>

      <a-col :span="24" class="gutter-row">
        <FormButton
          html-type="submit"
          class="submit-btn"
          type="primary"
          text="Lưu"
        />
      </a-col>
    </a-row>
  </form>
</template>

<script setup>
import { watch } from "vue";
import * as Yup from "yup";
import { useForm } from "vee-validate";

import InputField from "@/components/customInput/InputField.vue";
import TextAreaField from "@/components/customInput/TextAreaField.vue";
import FormButton from "@/components/customInput/FormButton.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import UploadFile from "./UploadFile.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { toSlug } from "@/utils/helper.js";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const validationSchema = Yup.object().shape({
  post_name: Yup.string().required("Tên danh mục không được để trống."),
  slug: Yup.string().required("Slug không được để trống"),
});

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    active: true,
    slug: "",
    post_name: "",
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
    await axios.post("http://localhost:4017/v1/category-posts", data);
    router.back();
  } catch (error) {
    console.error(error);
  }
});

const editorData = "<p>Content of the editor.</p>";
const editorConfig = {};
const editor = ClassicEditor;
</script>

<style lang="scss" scoped>
.status {
  margin: 20px 0;
}
.gutter-row {
  text-align: right;
}
.submit-btn {
  margin-top: 30px;
}
.container-editor {
  margin-top: 20px;
}
</style>
