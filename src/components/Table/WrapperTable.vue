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

      <template v-if="column.dataIndex === 'edit'">
        <button 
          @click="emits('handleEdit', record.key)" 
          class="btn-action btn"
        >
          <EditOutlined />
          <div class="btn-text">Chỉnh sửa</div>
        </button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed, defineProps } from "vue";
import FormSwitch from "@/components/customInput/FormSwitch.vue";
import { EditOutlined } from "@ant-design/icons-vue";

const props = defineProps(["columns", "data", "id_row"]);
const emits = defineEmits(['change', 'handleEdit'])

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
.btn-action {
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-color: var( --color-line);
  padding: 5px 15px;
  font-size: 15px;
  .btn-text {
    margin-left: 8px;
  }
}
</style>
