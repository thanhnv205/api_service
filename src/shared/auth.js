import { useAuthStore } from "@/stores/auth";
import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const data = Cookies.get("accessToken");
  console.log("data token", data);
  const { token } = useAuthStore();
  return !!token;
};
