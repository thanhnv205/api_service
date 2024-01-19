import { defineStore } from "pinia";

export const useNewsStore = defineStore({
  id: "news",
  state: () => ({
    apiData: [],
  }),
  actions: {
    setApiData(data) {
      this.apiData = data;
    },
  },
});
