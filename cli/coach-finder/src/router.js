import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
// import ContactCoach from "./pages/requests/ContactCoach.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFoundVue from "./pages/NotFound.vue";

const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    props: true,
  },
  {
    path: "/coaches/:id/contact",
    component: CoachDetail,
    props: true,
  },
  { path: "/register", component: CoachRegistration },
  { path: "/requests", component: RequestsReceived },
  { path: "/:notFound(.*)", component: NotFoundVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
});

export default router;
