import { createRouter, createWebHistory } from "vue-router";

import CoachList from "@/pages/coaches/CoachList.vue";
import CoachDetail from "@/pages/coaches/CoachDetail.vue";
import CoachRegistration from "@/pages/coaches/CoachRegistration.vue";

import RequestsList from "@/pages/requests/RequestsList.vue";

import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    meta: {
      title: "Coach List",
    },
    component: CoachList,
  },
  {
    name: "coachesDetail",
    path: "/coaches/:id",
    props: true,
    meta: {
      title: "Coach Detail Page",
    },
    component: CoachDetail,
  },
  {
    name: "coachRegistration",
    path: "/register",
    meta: {
      title: "Coach Registration",
    },
    component: CoachRegistration,
  },
  {
    name: "requests",
    path: "/requests",
    meta: {
      title: "Requests List",
    },
    component: RequestsList,
  },
  {
    path: "/:notFound(.*)",
    meta: {
      title: "Page Not Found",
    },
    component: NotFound,
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

export default router;
