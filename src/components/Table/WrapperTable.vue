<template>
  <a-table
    :columns="props.columns"
    :data-source="tableData"
    :pagination="{ showSizeChanger: false }"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <Switch size="small" />
        <!-- <a-switch v-model:checked="checked" size="small" /> -->
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
  return props.data.map((row, i) => {
    const rowData = {};
    props.columns.forEach((column) => {
      rowData[column.dataIndex] = row[column.dataIndex];
    });

    return {
      key: row[props.id_row] || i,
      ...rowData,
    };
  });
});
console.log("props.tableData", tableData);
</script>
