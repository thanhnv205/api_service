<template>
  <a-table
    :columns="props.columns"
    :data-source="tableData"
    :pagination="{ showSizeChanger: false }"
  >
    <template v-slot:bodyCell="{ text, record, index, column }">
      <template v-if="column.dataIndex === 'image_name'">
        <img :src="`${column.url}/${text}`" :alt="record.post_name" class="image-coll" />
      </template>

      <template v-if="column.dataIndex === 'active'">
        <FormSwitch size="small" :checked="record.active" @change="handleChange([record.key], !record.active)" />
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed, defineProps } from "vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";

const props = defineProps(["columns", "data", "id_row"]);
const emits = defineEmits(['change'])

const handleChange = (ids, active) => {
  emits('change', { ids, active })
}

const tableData = computed(() => {
  return props.data.map((row, index) => {
    const rowData = {};
    props.columns.forEach((column) => {
      rowData[column.dataIndex] = row[column.dataIndex];
    });

    return {
      key: row._id || index,
      ...rowData,
    };
  });
});
</script>

<style scoped lang="scss">
.image-coll {
  max-width: 100px;
}
</style>
