<template>
  <ModalDialog title="Bộ lọc">
    <form @submit="onSubmit">
      <a-row :gutter="20">
        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <InputField
            name="code_id"
            type="text"
            label="Mã danh mục"
            placeholder="Mã danh mục"
          />
        </a-col>

        <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
          <InputField
            name="category_name"
            type="text"
            label="Tên danh mục"
            placeholder="Tên danh mục"
          />
        </a-col>

        <a-col :span="12">
          <InputField
            name="description"
            type="text"
            label="Mô tả"
            placeholder="Mô tả"
          />
        </a-col>

        <a-col :span="12">
          <InputField
            name="active"
            type="text"
            label="Trạng thái"
            placeholder="Trạng thái"
          />
        </a-col>
      </a-row>

      <div class="modal-footer">
        <FormButton
          class="btn-reset"
          @click="handleReset"
          text="Xóa bộ lọc"
          type="primary"
          size="small"
        >
          <template #icon>
            <CloseOutlined />
          </template>
        </FormButton>

        <FormButton
          class="btn-submit"
          text="Áp dụng"
          size="small"
          htmlType="submit"
        >
          <template #icon>
            <FileSearchOutlined />
          </template>
        </FormButton>
      </div>
    </form>
  </ModalDialog>
</template>
<script setup>
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";

import ModalDialog from "@/components/ModalDialog.vue";
import { useVisibleModal } from "@/stores/visibleModal";

import InputField from "@/components/customInput/InputField.vue";
import FormButton from "@/components/customInput/FormButton.vue";

import { CloseOutlined, FileSearchOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const modal = useVisibleModal();

const { handleSubmit, values, setFieldValue } = useForm({
  initialValues: {
    code_id: "",
    category_name: "",
    description: "",
    active: "",
  },
});

const onSubmit = handleSubmit((data) => {
  modal.toggleVisibleModal();

  const queryParams = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== "")
  );

  const routeObject = {
    name: "category news",
    query: queryParams,
  };

  router.push(
    Object.keys(queryParams).length > 0
      ? routeObject
      : { name: "category news" }
  );
});

const handleReset = () => {
  Object.keys(values).forEach((key) => setFieldValue(key, ""));
};
</script>
