import { ref } from "vue";
import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
  const user = ref(null);

  const setAuth = (newToken) => {
    token.value = newToken?.token;
    user.value = newToken?.user;
    Cookies.set("accessToken", newToken.token, { expires: 1 });
  };

  const clearToken = () => {
    token.value = null;
    Cookies.remove("accessToken");
  };

  return { user, token, setAuth, clearToken };
});
