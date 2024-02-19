<template>
  <a-layout>
    <Header :selectedKeys="selectedKeys1" />

    <a-layout style="padding: 20px;">
      <a-layout-sider width="280">
        <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
          :style="{ height: '100%', borderRight: 0 }">

          <HeadingLine title='ACCOUNT & ROLE' :style="{ padding: '0 20px 0 28px' }" />

          <a-menu-item key="1">Tài khoản</a-menu-item>
          <a-menu-item key="2">Phân quyền</a-menu-item>

          <HeadingLine title='SYSTEM' :style="{ padding: '0 20px 0 28px' }" />

          <a-menu-item key="3">
            <router-link to="/system/menu-type">
              Danh sách menu
              </router-link>
          </a-menu-item>

          <a-menu-item key="4">
            <router-link to="/system/menu-system">
              Loại menu
            </router-link>
          </a-menu-item>

          <HeadingLine title='WEBSITE' :style="{ padding: '0 20px 0 28px' }" />

          <a-sub-menu key="sub1">
            <template #title>
              <span>
                Tin tức
              </span>
            </template>
            <a-menu-item key="5">
              <router-link to="/news/category">
                Danh mục bài viết
              </router-link>
            </a-menu-item>
            <a-menu-item key="6">
              <router-link to="/news/posts">Bài viết</router-link>
            </a-menu-item>
            <a-menu-item key="7">
              <router-link to="/news/tag">Tag bài viết</router-link>
            </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub2">
            <template #title>
              <span>
                Khách hàng
              </span>
            </template>

            <a-menu-item key="8">Sale admin</a-menu-item>
            <a-menu-item key="9">Liên hệ</a-menu-item>
            <a-menu-item key="10">Đánh giá</a-menu-item>
            <a-menu-item key="11">Yêu cầu hỗ trợ</a-menu-item>

          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <a-layout style="padding: 0 0 0 20px">
        <a-layout-content class="custom-layout">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from "@/components/Header.vue";
import HeadingLine from "@/components/HeadingLine.vue";

import { ref } from "vue";
const selectedKeys1 = ref(["1"]);
 const selectedKeys2 = ref(["6"]);
 const openKeys = ref(["sub1"]);
</script>

<style scoped lang="scss">
.custom-layout {
  background: var(--bg-color-primary);
  padding: 40px;
  margin: 0;
  min-height: 400px;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
 ::v-deep(.ant-menu) {
 padding: 0 20px;
}

::v-deep(.ant-menu-item) {
  font-size: 15px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
::v-deep(.ant-menu .ant-menu-title-content),
::v-deep(.ant-menu .ant-menu-title-content a) {
  transition: color .1s !important;
} 
::v-deep(.ant-menu-item-selected) {
    color: var(--color-white) !important;
    background: linear-gradient(90deg,var(--bg-linear-secondary),var(--bg-linear-secondary) 108.33%);
    background-image: linear-gradient(45deg,var(--bg-linear-primary),var(--bg-linear-secondary) 100%,var(--bg-linear-primary));
}

::v-deep(.ant-menu-item:not(.ant-menu-item-selected):hover),
::v-deep(.ant-menu-submenu-title:not(.ant-menu-item-selected):hover),
::v-deep(.ant-menu-submenu-title[aria-expanded="true"]) {
  color: var(--color-red) !important;
  background: linear-gradient(90deg,var(--bg-linear-secondary),var(--bg-linear-secondary) 108.33%);
}

::v-deep(.ant-menu-submenu-title) {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

::v-deep(.ant-menu-sub),
::v-deep(.ant-menu-submenu-title:hover) {
  background-color: transparent !important;
}

::v-deep(.ant-menu-submenu-selected .ant-menu-submenu-title),
::v-deep(.ant-menu-submenu-title[aria-expanded="true"]) {
  color: var(--color-red) !important;
}
</style>
