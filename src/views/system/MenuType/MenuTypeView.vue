<template>
  <FormToolbar />
  <Table
    :columns="columns"
    :data="newsStore.apiData"
    :row-selection="rowSelection"
    id_row="id_post"
  />
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { useNewsStore } from "@/stores/newsStore";

import FormToolbar from "./components/FormToolbar.vue";
import Table from "@/components/Table/WrapperTable.vue";

const newsStore = useNewsStore();

const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:4017/v1/menu-type");
    newsStore.setApiData(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
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
    title: "Tên menu",
    width: "25%",
    dataIndex: "type_name",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    width: "55%",
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
