<template>
  <a-upload
    v-model:file-list="fileList"
    name="image"
    list-type="picture-card"
    class="image-uploader"
    :show-upload-list="fileList.length > 0 && fileList[0].status === 'done'"
    :before-upload ="handleBeforeUpload"
    :action="`http://localhost:4017/${apiEndpoint}`"
    @remove="handleRemove"
    @preview="handlePreview"
  >

    <div v-if="fileList.length === 0">
      <AreaChartOutlined />
      <div style="margin-top: 8px">Upload</div>
    </div>

  </a-upload>

  <a-modal :open="previewVisible" :footer="null" @cancel="handleCancel">
    <img alt="example" style="width: 100%" :src="previewImage" />
  </a-modal>
</template>

<script setup>
import { ref } from 'vue';
import { AreaChartOutlined } from "@ant-design/icons-vue";
import axios from 'axios';

const { apiEndpoint } = defineProps(['apiEndpoint'])
const emits = defineEmits(['changeFile'])

const previewImage = ref('');
const fileList = ref([]);
const previewVisible = ref(false)

const handleBeforeUpload = async () => {
const {value} = fileList
console.log(value);
}

const handleCancel = () => {
  previewVisible.value = false;
};

const handleRemove = async ({response}) => {
  const { filename } = response
  await axios.post('http://localhost:4017/v1/posts/delete-image',{file: filename})
};


const handlePreview = async ({response}) => {
  const { url } = response
  previewImage.value = url
  previewVisible.value = true;
};

</script>

<style scoped lang="scss">
.image-uploader {
  overflow: hidden;
  ::v-deep(.ant-upload-list-item-thumbnail img) {
    object-fit: cover !important;
  }
}
::v-deep(.ant-upload.ant-upload-select),
::v-deep(.ant-upload-list-item-container) {
  width: 100% !important;
  height: 150px !important;
  margin: 0 !important;
}

::v-deep(.ant-upload.ant-upload-select:not(.ant-upload-disabled):hover) {
  border-color: var(--bg-linear-primary) !important;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

</style>
