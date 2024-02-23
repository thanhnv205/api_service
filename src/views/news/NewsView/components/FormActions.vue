<template>
  <form @submit.prevent="onSubmit" :validation-schema="validationSchema">
    <a-row :gutter="30">
      <a-col :span="24">
        <div class="status">
          <TitlePage size="normal" title="Trạng thái" />
          <FormSwitch
            name="active"
            :checked="values.active"
            v-bind="{ 'onUpdate:checked': (value)  => setFieldValue('active', value) }"
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

      <a-col :xs="{ span: 24 }" :lg="{ offset: 6, span: 6, pull: 6 }">
        <TitlePage 
          size="small" 
          title="Ảnh đại diện"
          pb="10px"
         />
        <UploadFile
          apiEndpoint="v1/posts/upload-image"
          :image-name="values.image_name"
          @changeFile="handleUpload"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <FormDatePicker 
          name="public_date" 
          label="Ngày xuất bản" 
          placeholder="Ngày xuất bản"
        />
      </a-col>

      <a-col :span="24" style="margin-top: 10px">
        <TextAreaField
          name="description"
          :rows="4"
          label="Mô tả"
          placeholder="Mô tả"
        />
      </a-col>

      <a-col :span="24">
        <div class="container-editor">
          <TitlePage 
            size="normal" 
            title="Nội dung"
            pb="15px"
            />

          <ckeditor
            name="content"
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
            @input="handleEditorChange"
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
import { watch, watchEffect, ref } from "vue";
import * as Yup from "yup";
import dayjs from "dayjs"
import { useForm } from "vee-validate";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import TitlePage from "@/components/TitlePage.vue"
import InputField from "@/components/customInput/InputField.vue";
import FormDatePicker from "@/components/customInput/FormDatePicker.vue";
import TextAreaField from "@/components/customInput/TextAreaField.vue";
import FormButton from "@/components/customInput/FormButton.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import UploadFile from "@/components/uploadFile/UploadImage.vue";

import { toSlug } from "@/utils/helper.js";
import { useRouter } from "vue-router";
import { dateView } from "@/utils/formatDate";
import { useNewsStore } from "@/stores/newsStore";


const router = useRouter();
const newsStore = useNewsStore();
const emits = defineEmits(['handle'])

const validationSchema = Yup.object().shape({
  post_name: Yup.string().required("Tên danh mục không được để trống."),
  slug: Yup.string().required("Slug không được để trống"),
  description: Yup.string().required("Mô tả không được để trống"),
  public_date: Yup.string().required("Ngày xuất bản không được để trống")
});

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    active: true,
    slug: "",
    post_name: "",
    public_date: null,
    description: "",
    image_name: null,
    content: null
  },
  validationSchema,
});

watchEffect(() => {
  const { updateData } = newsStore;
  if (Object.keys(updateData).length > 0) {
    const convertData = {
      ...updateData,
      public_date: dayjs(updateData.public_date, 'DD/MM/YYYY'),
    }
    
    Object.entries(convertData).forEach(([key, value]) => {
      setFieldValue(key, value);
    });
  }
});

watch(values, () => {
  handleChangeSlug();
});

const handleChangeSlug = (event) => {
  if (event) {
    const newSlug = toSlug(event?.target?.value);
    setFieldValue("slug", newSlug);
  }
};

const handleUpload = (fileName) => {
  setFieldValue("image_name", fileName);
}

const onSubmit = handleSubmit((data) => {
  const newData = {
    ...data,
    public_date: dateView(data.public_date)
  }
  emits('handle', newData)
   router.back();
});

const editorData = ref('')
const editor = ClassicEditor;
const editorConfig = {
           
}

const handleEditorChange = (event) => {
  setFieldValue('content', event)
};
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
