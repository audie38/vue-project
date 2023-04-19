import { createRouter, createWebHistory } from "vue-router";

import TeamList from "@/components/teams/TeamList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import UserList from "@/components/users/UserList.vue";

const routes = [
  {
    path: "/",
    redirect: "/teams",
  },
  {
    path: "/teams",
    meta: { needsAuth: true },
    components: { default: TeamList },
    // alias: "/",
    // children: [
    //   {
    //     path: ":id",
    //     component: TeamMembers,
    //     props: true,
    //   },
    // ],
  },
  {
    path: "/users",
    component: UserList,
  },
  {
    path: "/teams/:id",
    component: TeamMembers,
    props: true,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/teams",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log("Needs Auth");
  }
  next();
});

export default router;
