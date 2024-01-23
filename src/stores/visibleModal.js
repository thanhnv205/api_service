import { defineStore } from "pinia";

export const useVisibleModal = defineStore({
  id: "modal",
  state: () => ({
    visibleModal: false,
  }),
  actions: {
    toggleVisibleModal() {
      this.visibleModal = !this.visibleModal;
    },
  },
});
