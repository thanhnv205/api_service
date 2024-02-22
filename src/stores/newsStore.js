import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const apiData = ref([])
  const updateData = ref({})

  const setApiData = (data) => {
    apiData.value = data
  }

  const setActive = (ids, active) => {
    const newData = apiData.value.map(item => {
      return {
        ...item,
        active: ids.includes(item._id) ? active : item.active
      }
    })
    apiData.value = newData
  }

  const setUpdateData = (data) => {
    updateData.value = data
  }

  return {
    apiData,
    setApiData,
    setActive,
    updateData,
    setUpdateData
  }
})
