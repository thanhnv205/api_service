import { ref } from "vue";
import { defineStore } from "pinia";

export const useVisibleModal = defineStore("modal", () => {
  const visibleModal = ref(false)

  const toggleVisibleModal = () => {
    visibleModal.value = !visibleModal.value;
  }
  
  return { visibleModal, toggleVisibleModal };
});