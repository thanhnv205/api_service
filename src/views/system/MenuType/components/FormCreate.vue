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
          name="type_name"
          type="text"
          label="Tên loại menu"
          placeholder="Tên loại menu"
        />
      </a-col>

      <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
        <InputField
          name="description"
          type="text"
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
import * as Yup from "yup";
import { useForm } from "vee-validate";

import InputField from "@/components/customInput/InputField.vue";
import FormButton from "@/components/customInput/FormButton.vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const validationSchema = Yup.object().shape({
  type_name: Yup.string().required("Tên danh mục không được để trống."),
});

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    active: true,
    type_name: "",
    description: "",
  },
  validationSchema,
});

const handleSwitchChange = (isChecked) => {
  setFieldValue("active", isChecked);
};



const onSubmit = handleSubmit(async (data) => {
  try {
    await axios.post("http://localhost:4017/v1/menu-type", data);
    router.back();
  } catch (error) {
    console.error(error);
  }
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
