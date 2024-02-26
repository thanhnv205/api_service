<template>
  <LoadingPage :spinning="newsStore.loading">
    <FormActions @handle="handleUpdated" :params-id="params._id" />
  </LoadingPage>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from "vue-router";
import FormActions from "./components/FormActions.vue";
import { useNewsStore } from '@/stores/newsStore';
import LoadingPage from '@/components/LoadingPage.vue';
import actions from './actions'

const newsStore = useNewsStore()
const route = useRoute()
const { params } = route;

const handleUpdated = (data) => {
  actions.doUpdate(params._id, data)
}

onMounted(() => {
  actions.doGetUpdate(params._id)
})

</script>
