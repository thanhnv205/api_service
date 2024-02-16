import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)

  const setAuth = (newToken) => {
    token.value = newToken?.token
    user.value = newToken?.user
  }


  return { user, token, setAuth }
})
