import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const UserAuth = defineAsyncComponent(() => import("@/pages/auth/UserAuth.vue"));
const Register = defineAsyncComponent(() => import("@/pages/auth/SignUp.vue"));
const NotFound = defineAsyncComponent(() => import("@/pages/NotFound.vue"));

const routes = [
  {
    name: "home",
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: UserAuth,
    meta: {
      title: "Login",
    },
  },
  {
    name: "signup",
    path: "/signup",
    component: Register,
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
