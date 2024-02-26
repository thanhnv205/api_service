<template>
  <LoadingPage :spinning="newsStore.loading">
    <FormToolbar />
    <Table id_row="id_post" :columns="columns" :row-selection="rowSelection"
      :data="newsStore.apiData" @change="handleActive" @handleEdit="handleEdit" />
  </LoadingPage>
</template>

<script setup>
import { onMounted } from "vue";
import { useNewsStore } from "@/stores/newsStore";

import FormToolbar from "./components/FormToolbar.vue";
import Table from "@/components/Table/WrapperTable.vue";

import { useRouter } from "vue-router";
import LoadingPage from "@/components/LoadingPage.vue";
import actions from "./actions";

const router = useRouter()
const newsStore = useNewsStore();

const handleEdit = async (params) => {
  router.push({ path: `/news/update/${params}` });
}

const handleActive = async (data) => {
  actions.doActive(data.ids, data.active)
}

onMounted(() => {
  actions.doGetData()
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    actions.doSelectedRows({ selectedRowKeys, selectedRows })
  }
};

const columns = [
  {
    title: "Tiêu đề",
    width: "18%",
    dataIndex: "post_name",
  },
  {
    title: "Hình ảnh",
    width: "15%",
    dataIndex: "image_name",
    url: 'http://localhost:4017/images/posts'
  },
  {
    title: "Danh mục",
    width: "15%",
    dataIndex: "category_name",
  },
  {
    title: "Nội dung",
    dataIndex: "description",
    width: "28%",
  },

  {
    title: "Trạng thái",
    dataIndex: "active",
    align: "center"
  },

  {
    title: "Hành động",
    dataIndex: "edit",
    align: "center",
    fixed: "right",
  },
];
</script>

<style scoped lang="scss">
::v-deep(.ant-pagination-item-active) {
  border-color: var(--bg-linear-primary);
}

::v-deep(.ant-pagination-item-active a) {
  color: var(--bg-linear-primary);
}
</style>
