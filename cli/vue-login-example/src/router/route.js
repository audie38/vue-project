import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "@/modules/store.js";
import HomePage from "@/pages/HomePage.vue";

const UserAuth = defineAsyncComponent(() => import("@/pages/auth/UserAuth.vue"));
const Register = defineAsyncComponent(() => import("@/pages/auth/SignUp.vue"));
const NotFound = defineAsyncComponent(() => import("@/pages/NotFound.vue"));
const Protected = defineAsyncComponent(() => import("@/pages/ProtectedPage.vue"));

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
  {
    name: "login",
    path: "/login",
    component: UserAuth,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    name: "signup",
    path: "/signup",
    component: Register,
    meta: {
      title: "Sign Up",
      requiresAuth: false,
    },
  },
  {
    name: "protected",
    path: "/protected",
    component: Protected,
    meta: {
      title: "Protected",
      requiresAuth: true,
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

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: "login" });
  } else if (!to.meta.requiresAuth && store.getters.isAuthenticated) {
    next({ name: "protected" });
  } else {
    next();
  }
});

export default router;
