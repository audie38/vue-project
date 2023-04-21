<template>
  <CoachFilter />
  <base-card>
    <div class="d-flex justify-content-start align-items-center mx-3">
      <button class="btn btn-outline-dark me-1">Refresh</button>
      <router-link class="btn btn-dark ms-auto" to="/register">Register as Coach</router-link>
    </div>
    <div v-if="hasCoaches">
      <CoachItem v-for="coach in coaches" :key="coach.id" :coachData="coach" />
    </div>
    <div class="mt-3" v-else>
      <h3>No Coaches found</h3>
    </div>
  </base-card>
</template>

<script>
import { mapGetters } from "vuex";

import CoachFilter from "@/components/coaches/CoachFilter.vue";
import CoachItem from "@/components/coaches/CoachItem.vue";

export default {
  name: "CoachesList",
  components: {
    CoachFilter,
    CoachItem,
  },
  computed: {
    ...mapGetters("coach", ["coaches", "hasCoaches"]),
  },
};
</script>

<style></style>
