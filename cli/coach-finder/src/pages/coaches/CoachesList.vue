<template>
  <CoachFilter @change-filter="setFilter" />
  <base-card>
    <div class="d-flex justify-content-start align-items-center mx-3">
      <button class="btn btn-outline-dark me-1">Refresh</button>
      <router-link v-if="!isCoach" class="btn btn-dark ms-auto" to="/register">Register as Coach</router-link>
    </div>
    <div v-if="hasCoaches">
      <CoachItem v-for="coach in paginationData" :key="coach.id" :coachData="coach" />
      <div class="mt-3 me-3">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-end">
            <li class="page-item"><button @click="prevNavIndex" :disabled="navStartIndex == 0" class="page-link">Previous</button></li>
            <li v-for="navi in navigationData" :key="navi" class="page-item">
              <button @click="showDataOfIndex(navi)" class="page-link">{{ navi + 1 }}</button>
            </li>
            <li class="page-item"><button @click="nextNavIndex" :disabled="isDisabled" class="page-link">Next</button></li>
          </ul>
        </nav>
      </div>
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
  data() {
    return {
      dataStartIndex: 0,
      perPage: 2,
      navLimit: 5,
      navStartIndex: 0,
      activeNav: 0,
      activeFilters: ["frontend", "backend", "career"],
    };
  },
  computed: {
    ...mapGetters("coach", ["hasCoaches", "isCoach"]),
    filteredCoaches() {
      const coaches = this.$store.getters["coach/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.some((c) => coach.areas.includes(c))) {
          return true;
        }
      });
    },
    paginationData() {
      const coaches = this.$store.getters["coach/coaches"];
      const FilteredCoach = coaches
        .filter((coach) => {
          if (this.activeFilters.some((c) => coach.areas.includes(c))) {
            return true;
          }
        })
        .slice(this.dataStartIndex, this.dataStartIndex + this.perPage);
      return FilteredCoach;
    },
    navigationData() {
      const coaches = this.$store.getters["coach/coaches"];
      const totalFilteredCoach = coaches.filter((coach) => {
        if (this.activeFilters.some((c) => coach.areas.includes(c))) {
          return true;
        }
      }).length;
      let numOfPage = 1;
      if (totalFilteredCoach > this.perPage) {
        numOfPage = Math.ceil(totalFilteredCoach / this.perPage);
      }
      const naviData = Array.from(Array(numOfPage).keys());
      if (naviData.length > 1) {
        return naviData.slice(this.navStartIndex, this.navStartIndex + this.navLimit);
      }
      return naviData;
    },
    isDisabled() {
      const coaches = this.$store.getters["coach/coaches"];
      const totalFilteredCoach = coaches.filter((coach) => {
        if (this.activeFilters.some((c) => coach.areas.includes(c))) {
          return true;
        }
      }).length;
      let numOfPage = 1;
      if (totalFilteredCoach > this.navLimit) {
        numOfPage = Math.ceil(totalFilteredCoach / this.perPage);
      }
      const naviData = Array.from(Array(numOfPage).keys());
      return this.navStartIndex + this.navLimit >= naviData.length;
    },
  },
  methods: {
    setFilter(filter) {
      this.activeFilters = filter;
    },
    showDataOfIndex(idx) {
      this.dataStartIndex = idx * this.perPage;
    },
    nextNavIndex() {
      this.activeNav += 1;
      if (this.activeNav * this.navLimit != this.navigationData[this.navigationData.length - 1]) {
        this.navStartIndex = this.activeNav * this.navLimit;
      }
    },
    prevNavIndex() {
      this.activeNav -= 1;
      this.navStartIndex = this.activeNav * this.navLimit;

      if (this.activeNav * this.navLimit <= 0) {
        this.navStartIndex = 0;
      }
    },
  },
};
</script>

<style></style>
