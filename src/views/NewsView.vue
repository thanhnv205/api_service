<template>
  <Table :data="newsStore.apiData" />
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
</script>

<style>
/* Your styles here */
</style>
