<template>
  <FormToolbar />
  <FormFilter />
  <LoadingPage>
    <Table
      :columns="columns"
      :data="newsStore.apiData"
      :row-selection="rowSelection"
      id_row="id_post"
    />
  </LoadingPage>
</template>

<script setup>
import axios from "axios";
import { watch, onMounted } from "vue";
import { useRoute } from "vue-router";

import FormToolbar from "./components/FormToolbar.vue";
import Table from "@/components/Table/WrapperTable.vue";
import FormFilter from "./components/FormFilter.vue";
import LoadingPage from "@/components/LoadingPage.vue";

import { useNewsStore } from "@/stores/newsStore";

const route = useRoute();

const newsStore = useNewsStore();

const fetchData = async (params) => {
  try {
    const { data } = await axios.get(
      "http://localhost:4017/v1/category-posts",
      { params }
    );
    newsStore.setApiData(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});

watch(route, () => {
  const { query } = route;
  fetchData(query);
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const columns = [
  {
    title: "Tên danh mục",
    width: "15%",
    dataIndex: "category_name",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    width: "50%",
  },
  {
    title: "Slug",
    dataIndex: "slug",
    width: "25%",
  },
  {
    title: "Trạng thái",
    dataIndex: "active",
    align: "center",
    fixed: "right",
  },
];
</script>

<style>
/* Your styles here */
</style>
