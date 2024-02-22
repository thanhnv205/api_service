<template>
  <FormActions @handle="handleUpdated" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from "vue-router";
import FormActions from "./components/FormActions.vue";
import APIs from '@/api/apiService';
import { useNewsStore } from '@/stores/newsStore';

const newsStore = useNewsStore()
const route = useRoute()
const { params } = route;

const handleGetUpdate = async (params) => {
  try {
    return await APIs.get(`v1/posts/${params}`);
  } catch (error) {
    console.error(error);
  }
}

const handleUpdated = async (data) => {
  try {
    return await APIs.put(`v1/posts/${params._id}`, data);
  } catch (error) {
    console.error(error);
  }
}

onMounted(async() => {
  const { data } = await handleGetUpdate(params._id);
  newsStore.setUpdateData(data)
});
</script>
