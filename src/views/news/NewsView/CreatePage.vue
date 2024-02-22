<template>
  <FormActions @handle="handleCreated" />
</template>

<script setup>
import APIs from "@/api/apiService";
import FormActions from "./components/FormActions.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const handleCreated = async (data) => {
  try {
    await APIs.post("http://localhost:4017/v1/posts", data);
    router.back();
  } catch (error) {
    console.error(error);
  }
}
</script>
