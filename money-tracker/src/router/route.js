import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import store from "@/modules/store.js";

const TrxHome = defineAsyncComponent(() => import("@/pages/transaction/TrxHome"));
const AuthLogin = defineAsyncComponent(() => import("@/pages/auth/AuthLogin.vue"));
const AuthRegister = defineAsyncComponent(() => import("@/pages/auth/AuthRegister.vue"));
const NotFound = defineAsyncComponent(() => import("@/pages/NotFound.vue"));

const routes = [
  {
    name: "home",
    path: "/",
    component: TrxHome,
    meta: {
      title: "Money Tracker",
      isAuthRequired: true,
    },
  },
  {
    name: "login",
    path: "/login",
    component: AuthLogin,
    meta: {
      title: "Money Tracker | Login",
      isAuthRequired: false,
    },
  },
  {
    name: "register",
    path: "/register",
    component: AuthRegister,
    meta: {
      title: "Money Tracker | Register",
      isAuthRequired: false,
    },
  },
  {
    name: "NotFound",
    path: "/:NotFound(.*)",
    component: NotFound,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.isAuthRequired && !store.getters["auth/isAuth"]) {
    next({ name: "login" });
  } else if (!to.meta.isAuthRequired && store.getters["auth/isAuth"]) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
