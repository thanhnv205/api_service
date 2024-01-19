<template>
  <section class="container">
    <div class="wrapper-login">
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" placeholder="Email" />
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" placeholder="Password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>




        <a-form-item>
          <a-button class="btn" html-type="submit" type="primary" shape="round" :size="size">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center
}

.wrapper-login {
  width: 500px
}
</style>
