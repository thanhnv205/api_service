<template>
  <a-row :gutter="20" class="toolbar">
    <a-col :span="8"></a-col>

    <a-col :span="10" :offset="6" class="toolbar-left">
      <FormButton text="Thêm mới" type="primary" size="large" @click="handleCreate">
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
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import { useNewsStore } from "@/stores/newsStore";
import actions from "../actions";

const router = useRouter()
const newsStore = useNewsStore()

const handleCreate = () => {
  router.push({ name: "create news" });
};

const handleDelelte = () => {
  actions.doDelete(newsStore.selectedRowKeys)
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
