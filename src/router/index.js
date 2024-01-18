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
          path: "/news",
          name: "news",
          component: () => import("@/views/NewsView/index.vue"),
        },
        {
          path: "/news/create",
          name: "create news",
          component: () => import("@/views/NewsView/CreatePage.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page Not Found",
      component: () => import("@/views/NotFound.vue"),
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
