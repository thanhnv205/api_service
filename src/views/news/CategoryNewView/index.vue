<template>
  <FormToolbar />
  <FormFilter />
  <LoadingPage>
    <Table :columns="columns" :data="categoryNews.apiData" :row-selection="rowSelection" id_row="id_post"
      @change="handleActive" />
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

import { useCategoryNewStore } from '@/stores/categoryNewStore'
import actions from "./actions";

const route = useRoute();

const categoryNews = useCategoryNewStore()

onMounted(() => {
  actions.doGetData()
});

watch(route, () => {
  const { query } = route;
  fetchData(query);
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    actions.doSelectedRows({ selectedRowKeys, selectedRows })
  }
};

const handleActive = async (data) => {
  actions.doActive(data.ids, data.active)
}

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
