<template>
  <section class="container">
    <div class="wrapper-login">
      <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
          <a-input class="form-input" v-model:value="formState.email" placeholder="Tên đăng nhập" />
        </a-form-item>

        <a-form-item class="custom-password" name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password class="form-input" v-model:value="formState.password" placeholder="Mật khẩu" />
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <FormCheckbox v-model:checked="formState.remember" label="Remember me" />
          </a-form-item>
          <a class="wrapper-login-forgot" href="">Forgot password</a>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="wrapper-login-button">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

import apiService from '@/api/apiService'

import FormCheckbox from "@/components/customInput/FormCheckbox.vue";
import { useAuthStore } from '@/stores/auth'


const authStore = useAuthStore()
const router = useRouter();
const formState = reactive({
  email: "",
  password: "",
  remember: true,
});

const onFinish = async (data) => {
  const newData = {
    email: data.email,
    password: data.password
  }
  try {
    const { data } = await apiService.post("auth/login", newData);
    authStore.setAuth(data)

    router.push({ name: "homepage" });
  } catch (error) {
    console.error(error);
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.email && formState.password);
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #1d202d;
}

.wrapper-login {
  min-width: 450px;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 30px;
  background-color: #242a37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  form {
    width: 100%;
  }

  &-forgot {
    color: #fff;
    float: right;
    font-style: italic;
  }

  &-button {
    width: 100%;
    font-size: 18px;
    border-color: transparent;
    background-color: #33b574;
    color: #fff;
    min-height: 50px;
  }
}

.form-input {
  width: 100%;
  font-size: 15px;
  border-radius: 5px;
  color: #fff;
  outline: none;
  padding: 10px 20px;

  border: 1px solid transparent;
  background-color: #2a3141;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #374957;
    box-shadow: none;
  }

  &::placeholder {
    color: #fff;
  }
}

::v-deep(.custom-password) {
  input {
    background-color: #2a3141;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  svg {
    fill: #fff;
  }
}
</style>
