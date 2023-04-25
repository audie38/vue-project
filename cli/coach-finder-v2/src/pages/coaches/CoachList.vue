<template>
  <CoachFilter @coach-filter="coachActiveFilter" />
  <base-card>
    <div class="d-flex align-items-center mt-2 mx-3">
      <button @click="loadCoaches" class="btn border justify-content-start">Refresh</button>
      <router-link :to="{ name: 'coachRegistration' }" v-if="!isCoach" class="btn btn-dark ms-auto">Register as Coach</router-link>
    </div>
    <div class="d-flex justify-content-center align-items-center my-5" v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div class="my-5" v-if="isLoading">
        <base-spinner />
      </div>
      <div v-else-if="coachExists && !isLoading && fetchCoachList.length > 0">
        <CoachItem v-for="coach in fetchCoachList" :key="coach.id" :data="coach" />
      </div>
      <div class="text-center my-5" v-else>
        <h3>No Coach Available</h3>
      </div>
    </div>
  </base-card>
</template>

<script>
import CoachFilter from "@/components/coaches/CoachFilter.vue";
import CoachItem from "@/components/coaches/CoachItem.vue";

export default {
  name: "CoachList",
  components: {
    CoachFilter,
    CoachItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilter: ["frontend", "backend", "career"],
    };
  },
  methods: {
    coachActiveFilter(filter) {
      this.activeFilter = filter;
    },
    updateRegisterStatus() {
      this.$store.dispatch("coach/updateRegisterStatus");
    },
    async loadCoaches() {
      this.error = null;
      this.isLoading = true;
      try {
        await this.$store.dispatch("coach/fetchCoachData");
      } catch (err) {
        this.error = err.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
  computed: {
    fetchCoachList() {
      const coachList = this.$store.getters["coach/coachList"];
      const filteredCoachList = coachList.filter((coach) => {
        if (this.activeFilter.some((area) => coach.areas.includes(area))) {
          return true;
        }
      });
      return filteredCoachList;
    },
    coachExists() {
      return this.$store.getters["coach/hasCoach"];
    },
    isCoach() {
      return this.$store.getters["coach/isCoach"];
    },
  },
  created() {
    this.loadCoaches();
    this.updateRegisterStatus();
  },
};
</script>

<style></style>
