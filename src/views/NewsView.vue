<template>
  <Table
    :columns="columns"
    :data="newsStore.apiData"
    :row-selection="rowSelection"
  />
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import Table from "@/components/Table/WrapperTable.vue";
import { useNewsStore } from "@/stores/newsStore";

const newsStore = useNewsStore();

const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/v1/news");
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
    title: "Tiêu đề",
    width: "15%",
    key: "title",
  },
  {
    title: "Hình ảnh",
    width: "12%",
    align: "center",
    key: "image",
  },
  {
    title: "Nội dung",
    width: "58%",
    key: "description",
  },

  {
    title: "Trạng thái",
    align: "center",
    key: "active",
    fixed: "right",
  },
];
</script>

<style>
/* Your styles here */
</style>
