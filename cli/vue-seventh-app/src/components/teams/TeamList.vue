<template>
  <div>
    <TeamItem v-for="team in teams" :key="team.id" :team="team" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TeamItem from "./TeamItem.vue";

export default {
  name: "TeamList",
  components: {
    TeamItem,
  },
  inject: ["teams"],
};
</script>

<style></style>
