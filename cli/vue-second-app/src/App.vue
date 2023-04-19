<template>
  <div>
    <NavigationBar />
    <div class="container my-5">
      <keep-alive>
        <BadgeList :roles="roles" />
      </keep-alive>
      <BaseBadge v-for="user in users" :key="user.id" :fullname="user.name" :desc="user.desc" :role="this.roles.find((x) => x.id === user.role) == undefined ? {} : this.roles.find((x) => x.id === user.role)" />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/layout/NavigationBar.vue";
import BadgeList from "./components/BadgeList.vue";
import BaseBadge from "./components/BaseBadge.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    BadgeList,
    BaseBadge,
  },
  data() {
    return {
      roleDescription: "",
      users: [
        {
          id: 1,
          name: "Audie Milson",
          role: 1,
          desc: "Site Owner and Admin",
        },
        {
          id: 2,
          name: "Ichigo Kurosaki",
          role: 2,
          desc: "Site Author",
        },
        {
          id: 3,
          name: "Anonymous A",
          role: 3,
          desc: "Site Visitor",
        },
        {
          id: 4,
          name: "Banned B",
          role: 4,
          desc: "Banned Visitor",
        },
      ],
      roles: [
        {
          id: 1,
          name: "Admin",
          color: "danger",
        },
        {
          id: 2,
          name: "Author",
          color: "primary",
        },
        {
          id: 3,
          name: "Visitor",
          color: "success",
        },
        {
          id: 4,
          name: "Banned",
          color: "secondary",
        },
      ],
    };
  },
  computed: {},
  method: {},
};
</script>

<style></style>
