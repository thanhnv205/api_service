<template>
  <FormActions @handle="handleCreated" />
</template>

<script setup>
import APIs from "@/api/apiService";
import FormActions from "./components/FormActions.vue";

const handleCreated = async (data) => {
  try {
    await APIs.post("http://localhost:4017/v1/posts", data);
  } catch (error) {
    console.error(error);
  }
}
</script>
