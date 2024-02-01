<template>
  <a-modal
    class="custom-modal"
    v-model:open="visibleModal"
    width="1000px"
    :title="title"
    :footer="null"
  >
    <div class="modal-wrapper">
      <slot></slot>
    </div>
  </a-modal>
</template>

<script setup>
import { toRefs } from "vue";
import { useVisibleModal } from "@/stores/visibleModal";

const modal = useVisibleModal();
const { visibleModal } = toRefs(modal);

const props = defineProps(["title"]);
</script>

<style>
.custom-modal {
  .ant-modal-content {
    padding: 40px;
  }
  .ant-modal-header {
    margin-bottom: 30px;
  }
  .ant-modal-title {
    font-size: 18px;
  }
  .ant-modal-close {
    top: 40px;
    right: 40px;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    .ant-btn {
      margin-inline-start: 20px !important;
    }

    .btn-reset {
      background: #fff;
      border: 1px solid var(--color-line);
      color: var(--color-black);
      &:hover {
        color: var(--bg-linear-primary);
        border-color: var(--bg-linear-primary);
      }
    }
  }
}
</style>
