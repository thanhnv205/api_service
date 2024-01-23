<template>
  <a-layout>
    <Header :selectedKeys="selectedKeys1" />

    <a-layout style="padding: 20px;">
      <a-layout-sider width="280">
        <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
          :style="{ height: '100%', borderRight: 0 }">

          <HeadingLine title='ACCOUNT & ROLE' :style="{ padding: '0 20px 0 28px' }" />

          <a-menu-item key="6">Tài khoản</a-menu-item>
          <a-menu-item key="5">Phân quyền</a-menu-item>

          <HeadingLine title='SYSTEM' :style="{ padding: '0 20px 0 28px' }" />

          <a-menu-item key="6">Danh sách menu</a-menu-item>
          <a-menu-item key="5">Loại menu</a-menu-item>

          <HeadingLine title='WEBSITE' :style="{ padding: '0 20px 0 28px' }" />

          <a-sub-menu key="sub1">
            <template #title>
              <span>
                Tin tức
              </span>
            </template>
            <a-menu-item key="1">
              <router-link to="/news/category">
                Danh mục bài viết
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/news/posts">Bài viết</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/news/tag">Tag bài viết</router-link>
            </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub3">
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
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
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
const selectedKeys2 = ref(["1"]);
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
</style>
