import APIs from "@/api/apiService";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

class actions {
  static async doLogin(user) {
    try {
      const { data } = await APIs.post("auth/login", user);
      authStore.setAuth(data);

      router.push({ name: "homepage" });
    } catch (error) {
      console.error(error);
    }
  }
}

export default actions;
