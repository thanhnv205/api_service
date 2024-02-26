import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    apiData: {
      data: [],
      total: 0
    },
    loading: false,
    updateData: {},
    selectedRows: [],
    selectedRowKeys: [],
    category: []
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

    setCreateData(data) {
      this.category = data
    },

    setUpdateData({ updateData, category }) {
      this.updateData = updateData
      this.category = category
      this.loading = false
    },

    setDelete(ids) {
      const { data } = this.apiData
      const newData = data?.filter(({ _id }) => !ids.includes(_id))
      this.apiData.data = newData
    }
  }
})
