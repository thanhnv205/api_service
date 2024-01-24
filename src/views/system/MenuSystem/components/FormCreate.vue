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
          name="menu_name"
          type="text"
          label="Tên menu"
          placeholder="Tên menu"
          @input="handleChangeSlug"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="slug"
          type="text"
          label="Slug (URL)"
          placeholder="Slug (URL)"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <FormSelect label="Danh mục cha" />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="icon"
          type="text"
          label="Icon (Biểu tượng)"
          placeholder="Icon (Biểu tượng)"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <FormSelect label="Target" />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="link_url"
          type="text"
          label="Link URL"
          placeholder="Link URL"
        />
      </a-col>

      <a-col :span="24">
        <TextAreaField
          name="description"
          :rows="4"
          label="Mô tả"
          placeholder="Mô tả"
        />
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
import FormButton from "@/components/customInput/FormButton.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import FormSelect from "@/components/customInput/FormSelect.vue";
import TextAreaField from "@/components/customInput/TextAreaField.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { toSlug } from "@/utils/helper";

const router = useRouter();

const validationSchema = Yup.object().shape({
  menu_name: Yup.string().required("Tên danh mục không được để trống."),
  slug: Yup.string().required("Slug (URL) không được để trống."),
});

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    active: true,
    menu_name: "",
    slug: "",
    description: "",
    id_parent: [],
    icon: "",
    target: "",
    link_url: "",
  },
  validationSchema,
});

const handleChangeSlug = (event) => {
  if (event) {
    const newSlug = toSlug(event.target?.value);
    setFieldValue("slug", newSlug);
  }
};

const handleSwitchChange = (isChecked) => {
  setFieldValue("active", isChecked);
};

watch(values, () => {
  handleChangeSlug();
});

const onSubmit = handleSubmit(async (data) => {
  console.log(data);
  // try {
  //   await axios.post("http://localhost:4017/v1/menu-type", data);
  //   router.back();
  // } catch (error) {
  //   console.error(error);
  // }
});
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
</style>
