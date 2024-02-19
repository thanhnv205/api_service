<template>

  <a-upload
    v-model:file-list="fileList"
    name="image"
    list-type="picture-card"
    class="image-uploader"
    :show-upload-list="fileList.length > 0 && fileList[0].status === 'done'"
    action='http://localhost:4017/v1/posts/upload-image'
  >

  <div v-if="fileList.length === 0">
    <AreaChartOutlined />
    <div style="margin-top: 8px">Upload</div>
  </div>

  </a-upload>

</template>

<script setup>
import { ref } from 'vue';
import { AreaChartOutlined } from "@ant-design/icons-vue";

const previewImage = ref('');
const fileList = ref([]);
const previewVisible = ref(false)

const handleCancel = () => {
  previewVisible.value = false;
};


const handleUpload = (file) => {
  console.log(file);
}

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
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