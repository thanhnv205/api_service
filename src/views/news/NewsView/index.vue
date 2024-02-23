<template>
  <LoadingPage :spinning="newsStore.loading">
    <FormToolbar />
    <Table
      id_row="id_post"
      :columns="columns"
      :row-selection="rowSelection"
      :data="newsStore.apiData"
      @change="handleActive"
      @handleEdit="handleEdit"
    />
  </LoadingPage>

</template>

<script setup>
import { onMounted } from "vue";
import { useNewsStore } from "@/stores/newsStore";

import FormToolbar from "./components/FormToolbar.vue";
import Table from "@/components/Table/WrapperTable.vue";
import APIs from "@/api/apiService";

import { useRouter } from "vue-router";
import LoadingPage from "@/components/LoadingPage.vue";
import Actions from "./actions";

const router = useRouter()
const newsStore = useNewsStore();

const fetchData = async () => {
  try {
    newsStore.loading = true
    setTimeout(async () => {
      const { data } = await APIs.get("v1/posts");
      newsStore.setApiData(data);
    }, 200)
  } catch (error) {
    console.error(error);
    newsStore.loading = false
  }
};

const handleEdit = async (params) => {
  router.push({ path: `/news/update/${params}` });
} 

const handleActive = async (data) => {
  Actions.doActive(data.ids, data.active)
}

onMounted(() => {
  fetchData();
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",selectedRows
    );
  },
};

const columns = [
  {
    title: "Tiêu đề",
    width: "20%",
    dataIndex: "post_name",
  },
  {
    title: "Hình ảnh",
    width: "15%",
    align: "center",
    dataIndex: "image_name",
    url: 'http://localhost:4017/images/posts'
  },
  {
    title: "Nội dung",
    dataIndex: "description",
    width: "40%",
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
::v-deep(.ant-pagination-item-active ) {
  border-color: var(--bg-linear-primary);
}
::v-deep(.ant-pagination-item-active a) {
    color: var(--bg-linear-primary);
  }
</style>
