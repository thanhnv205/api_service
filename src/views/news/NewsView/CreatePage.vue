<template>
  <FormActions @handle="handleCreated" />
</template>

<script setup>
import { onMounted } from 'vue'
import FormActions from "./components/FormActions.vue";
import actions from "./actions";

const handleCreated = (data) => {
  actions.doCreate(data)
}

onMounted(() => {
  actions.doGetCreate()
})
</script>
