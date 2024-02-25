<template>
  <a-row :gutter="20" class="toolbar">
    <a-col :span="8">
      <FormButton text="Bộ lọc" @click="modal.toggleVisibleModal">
        <template #icon>
          <FilterOutlined />
        </template>
      </FormButton>
    </a-col>

    <a-col :span="10" :offset="6" class="toolbar-left">
      <FormButton @click="handleCreate" text="Thêm mới" type="primary" size="large">
        <template #icon>
          <PlusCircleOutlined />
        </template>
      </FormButton>

      <FormButton text="Xóa" type="primary" size="large" @click="handleDelelte">
        <template #icon>
          <DeleteOutlined />
        </template>
      </FormButton>
    </a-col>
  </a-row>
</template>

<script setup>
import { useRouter } from "vue-router";
import FormButton from "@/components/customInput/FormButton.vue";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  FilterOutlined,
} from "@ant-design/icons-vue";

import { useVisibleModal } from "@/stores/visibleModal";
import { useCategoryNewStore } from '@/stores/categoryNewStore'

const categoryNews = useCategoryNewStore()

const modal = useVisibleModal();
const router = useRouter();

const handleCreate = () => {
  router.push({ name: "create category news" });
};

const handleDelelte = () => {
  console.log(categoryNews.selectedRowKeys);
}
</script>

<style lang="scss" scoped>
.toolbar {
  margin-bottom: 20px;

  &-left {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 25px;
    }
  }
}
</style>
