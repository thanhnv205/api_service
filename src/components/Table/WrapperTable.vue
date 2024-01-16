<template>
  <a-table
    :columns="column"
    :data-source="data"
    :pagination="{ showSizeChanger: false }"
    :scroll="{ y: 240 }"
  />
</template>
<script setup>
const props = defineProps(["data"]);

console.log(props.data);

const column = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = column.map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
</script>
