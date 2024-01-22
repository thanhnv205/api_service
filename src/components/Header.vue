<template>
  <a-layout-header class="header">
    <a-row class="row-header">
      <a-col :span="12">
        <div class="logo">
          <IconLogo />
        </div>
      </a-col>

      <a-col :span="12">
        <div class="option">
          <div class="option-bell is-tick">
            <BellOutlined class="icon option-icon" />
          </div>

          <a-avatar :size="50" @click="handleTogglePopup">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>

          <div class="card-user">
            <a-card :bordered="false" style="width: 300px" v-show="showUserPopup" ref="userPopupRef">
              <div class="card-header">
                <a-avatar size="large" icon="T" />
                <h3 class="card-title">Thành</h3>
              </div>

              <div class="card-item">
                <InfoCircleOutlined />
                <span>Thông tin tài khoản</span>
              </div>
              <div class="card-item">
                <LogoutOutlined />
                <span>Đăng xuất</span>
              </div>

            </a-card>

          </div>
        </div>
      </a-col>
    </a-row>

    <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal">
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu> -->
  </a-layout-header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconLogo from "./icons/IconLogo.vue";

import { UserOutlined, BellOutlined, LogoutOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";

const props = defineProps(["selectedKeys"]);
const selectedKeys = ref(props.selectedKeys);

const showUserPopup = ref(false);
const userPopupRef = ref(null);

const handleTogglePopup = () => {
  showUserPopup.value = !showUserPopup.value
}

onMounted(() => {
  window.addEventListener("click", handleWindowClick);
});

onUnmounted(() => {
  window.removeEventListener("click", handleWindowClick);
});

const handleWindowClick = (event) => {
  // Kiểm tra xem phần tử được click có nằm trong user-popup hay không
  if (userPopupRef.value && !userPopupRef.value.contains(event.target)) {
    closeUserPopup();
  }
};
</script>

<style lang="scss" scoped>
.row-header {
  height: 100%;
}

.logo {
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
}

.option {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;

  &-icon {
    font-size: 22px;
  }

  &-bell {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-tick::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      background-color: var(--color-red);
      border-radius: 100%;
    }
  }
}

::v-deep(.ant-card-body) {
  padding: 20px
}

.card-user {
  position: absolute;
  top: calc(100% + 5px);
  right: -30px;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .card-header {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 20px;

    &::before {
      position: absolute;
      bottom: 0;
      left: -20px;
      right: -20px;
      content: '';
      height: 1px;
      background-color: #d9d9d9;
    }
  }

  .card-title {
    margin: 0 16px;
    font-size: 15px;
    line-height: 1;
  }

  .card-item {
    display: flex;
    align-items: center;
    padding: 10px 0;

    & span:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>