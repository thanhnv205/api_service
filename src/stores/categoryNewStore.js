import { defineStore } from "pinia"

export const useCategoryNewStore = defineStore('categoryNews', {
  state: () => ({
    apiData: {
      data: [],
      total: 0
    },
    selectedRows: [],
    selectedRowKeys: [],
    loading: false,
  }),

  actions: {
    setApiData(data) {
      this.apiData = {
        data,
        total: data.total
      }
      this.loading = false
    },

    setSelectedRows({ selectedRowKeys, selectedRows }) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },

    setActive(ids, active) {
      const { data } = this.apiData
      const newData = data?.map(item => {
        return {
          ...item,
          active: ids.includes(item._id) ? active : item.active
        }
      })
      this.apiData.data = newData
    },
  },
})