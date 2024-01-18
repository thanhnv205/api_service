<template>
  <a-row :gutter="20" class="toolbar">
    <a-col :span="8"></a-col>

    <a-col :span="10" :offset="6" class="toolbar-left">
      <Button @click="handleCreate" text="Thêm mới" type="primary" size="large">
        <template #icon>
          <PlusCircleOutlined />
        </template>
      </Button>

      <Button text="Chỉnh sửa" type="primary" size="large">
        <template #icon>
          <EditOutlined />
        </template>
      </Button>
    </a-col>
  </a-row>
</template>

<script setup>
import Button from "@/components/customInput/Button.vue";
import { PlusCircleOutlined, EditOutlined } from "@ant-design/icons-vue";

import { useRouter } from "vue-router";

const router = useRouter();

const handleCreate = () => {
  router.push({ name: "create category news" });
};
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
