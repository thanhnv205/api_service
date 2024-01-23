<template>

    <a-modal class="custom-modal" 
      v-model:open="visibleModal" 
      width="1000px" 
      title="Bộ lọc"
      ok-text="Áp dụng"
      cancel-text="Đặt lại"
      @ok="handleSubmit"
    >
      <form @submit.prevent="onSubmit" :validation-schema="validationSchema">
        <a-row :gutter="20">
          <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <InputField name="category_name" type="text" label="Mã danh mục" placeholder="Tên danh mục"
              @input="handleChangeSlug" />
          </a-col>

          <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <InputField name="category_name" type="text" label="Tên danh mục" placeholder="Tên danh mục"
              @input="handleChangeSlug" />
          </a-col>


          <a-col :span="12">
            <InputField name="description"  type="text" label="Mô tả" placeholder="Mô tả" />
          </a-col>

          <a-col :span="12">
            <InputField name="active"  type="text" label="Trạng thái" placeholder="Trạng thái" />
          </a-col>
        </a-row>
      </form>
    </a-modal>

</template>
<script setup>
import {  toRefs } from 'vue';
import InputField from "@/components/customInput/InputField.vue";
import { useVisibleModal } from "@/stores/visibleModal";

const modal = useVisibleModal()
const { visibleModal } = toRefs(modal)

const handleSubmit = e => {
  modal.toggleVisibleModal()

};
</script>

<style >

.custom-modal {
  .ant-modal-content {
    padding: 40px;
  }
  .ant-modal-header {
    margin-bottom: 30px;
  }
  .ant-modal-title {
    font-size: 18px;
  }
  .ant-modal-close {
    top: 40px;
    right: 40px;
  }
  .ant-modal-footer {
    margin-top: 20px;
    .ant-btn {
      padding: 0 25px;
      min-height: 40px;
      margin-inline-start: 20px !important;
    }
  }
}
</style>