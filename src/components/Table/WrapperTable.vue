<template>
  <a-table
    :columns="props.columns"
    :data-source="tableData"
    :pagination="{ showSizeChanger: false }"
  >
    <template v-slot:bodyCell="{ text, record, index, column }">
      <template v-if="column.dataIndex === 'image'">
        <img :src="text" :alt="record.title" class="image-coll" />
      </template>

      <template v-if="column.dataIndex === 'active'">
        <Switch size="small" />
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import Switch from "@/components/customInput/Switch.vue";
const checked = ref(true);

const props = defineProps(["columns", "data", "id_row"]);

const tableData = computed(() => {
  return props.data.map((row, index) => {
    const rowData = {};
    props.columns.forEach((column) => {
      rowData[column.dataIndex] = row[column.dataIndex];
    });

    return {
      key: row[props.id_row] || index,
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
