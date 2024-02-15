import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      requiresAuth: true,
      children: [
        {
          path: "",
          name: "homepage",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "/news/posts",
          name: "news",
          component: () => import("@/views/news/NewsView/index.vue"),
        },
        {
          path: "/news/posts/create",
          name: "create news",
          component: () => import("@/views/news/NewsView/CreatePage.vue"),
        },

        {
          path: "/news/category",
          name: "category news",
          component: () => import("@/views/news/CategoryNewView/index.vue"),
        },
        {
          path: "/news/category/create",
          name: "create category news",
          component: () =>
            import("@/views/news/CategoryNewView/CreatePage.vue"),
        },
        {
          path: "/system/menu-type",
          name: "menu type",
          component: () => import("@/views/system/MenuType/MenuTypeView.vue"),
        },
        {
          path: "/system/menu-type/create",
          name: "create menu type",
          component: () => import("@/views/system/MenuType/CreatePage.vue"),
        },
        {
          path: "/system/menu-system",
          name: "menu system",
          component: () => import("@/views/system/MenuSystem/MenuSystemView.vue"),
        },
        {
          path: "/system/menu-system/create",
          name: "create menu system",
          component: () => import("@/views/system/MenuSystem/CreatePage.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page Not Found",
      component: () => import("@/views/NotFound.vue"),
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("@/views/AuthPage/Login.vue"),
    },
    // {
    //   path: "/error",
    //   name: "Error",
    //   component: () => import("@pages/Error.vue"),
    // },
  ],
});

// router.beforeEach(async (to, from, next) => {
//   console.log("check auth");
//   // check auth
// });

export default router;
