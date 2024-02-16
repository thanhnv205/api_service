import { useAuthStore } from '@/stores/auth'

export const isAuthenticated = () => {
  const { token } = useAuthStore()
  return !!token
}
