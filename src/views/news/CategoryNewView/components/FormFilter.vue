<template>
  <div>
    <FormButton text="Filter" @click="showModal" />

    <a-modal v-model:open="open" width="1000px" title="Bộ lọc" @ok="handleOk">
      <form @submit.prevent="onSubmit" :validation-schema="validationSchema">
        <a-row :gutter="20">
          <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <InputField name="category_name" type="text" label="Tên danh mục" placeholder="Tên danh mục"
              @input="handleChangeSlug" />
          </a-col>

          <a-col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <InputField name="slug" type="text" label="Slug (url)" placeholder="Slug (url)" />
          </a-col>

          <a-col :span="24">
            <TextAreaField name="description" :rows="4" label="Mô tả" placeholder="Mô tả" />
          </a-col>

          <a-col :span="24" class="gutter-row">
            <FormButton html-type="submit" class="submit-btn" type="primary" text="Lưu" />
          </a-col>
        </a-row>
      </form>
    </a-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FormButton from '@/components/customInput/FormButton.vue';

import { useForm } from "vee-validate";

import InputField from "@/components/customInput/InputField.vue";
import TextAreaField from "@/components/customInput/TextAreaField.vue";

import axios from "axios";
import { useRouter } from "vue-router";
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  open.value = false;
};
</script>