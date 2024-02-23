import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const apiData = ref({
    data: [],
    total: 0
  })
  const loading = ref(false)
  const updateData = ref({})

  const setApiData = (data) => {
    apiData.value = {
      data,
      total: data.total
    }
    loading.value = false
  }

  const doActive = (ids, active) => {
    const { data } = apiData.value
    const newData = data?.map(item => {
      return {
        ...item,
        active: ids.includes(item._id) ? active : item.active
      }
    })
    apiData.value.data = newData
  }

  const setUpdateData = (data) => {
    updateData.value = data,
    loading.value = false
  }

  return {
    apiData,
    setApiData,
    doActive,
    updateData,
    setUpdateData,
    loading
  }
})
