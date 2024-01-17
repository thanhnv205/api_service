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

const props = defineProps(["columns", "data"]);
console.log("props.columns", props.columns);

const tableData = computed(() => {
  return props.data.map((row, i) => {
    const rowData = {};
    props.columns.forEach((column) => {
      console.log(row[column.key]);
      rowData[column.key] = row[column.key];
    });

    return {
      ...rowData,
    };
  });
});
console.log("props.tableData", tableData);
</script>
