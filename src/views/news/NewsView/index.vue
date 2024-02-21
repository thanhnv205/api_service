<template>
  <FormToolbar />
  <Table
    :columns="columns"
    :data="newsStore.apiData"
    :row-selection="rowSelection"
    id_row="id_post"
    @change="handleActive"
  />
</template>

<script setup>
import { onMounted } from "vue";
import { useNewsStore } from "@/stores/newsStore";

import FormToolbar from "./components/FormToolbar.vue";
import Table from "@/components/Table/WrapperTable.vue";
import APIs from "@/api/apiService";

const newsStore = useNewsStore();


const fetchData = async () => {
  try {
    const { data } = await APIs.get("v1/posts");
    newsStore.setApiData(data);
  } catch (error) {
    console.error(error);
  }
};

const handleActive = async (data) => {
  await  APIs.post("v1/posts/active", data)
  newsStore.setActive(data.ids, data.active)
}

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
    width: "12%",
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
    width: "58%",
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
