import axios from "axios";
import { useAuthStore } from '@/stores/auth'

const APIs = axios.create({
  baseURL: process.env.VUE_APP_URI,
});

APIs.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const { token } = authStore;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    Object.assign(config.headers, {
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default APIs