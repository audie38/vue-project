<template>
  <base-card>
    <div class="text-center">
      <h2 class="mb-3">Requests Received</h2>
      <div v-if="error">
        {{ error }}
      </div>
      <div v-else>
        <div v-if="isLoading">
          <BaseSpinner />
        </div>
        <div v-else-if="hastRequestCoach">
          <div class="d-flex flex-column justify-content-center align-items-center mx-3">
            <RequestItem v-for="req in paginationData" :key="req.id" :email="req.userEmail" :message="req.userMessage" />
            <div class="mt-3 ms-auto">
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
        </div>
        <div v-else>
          <h5>You Haven't received any requests</h5>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

import { mapGetters } from "vuex";

export default {
  name: "RequestsReceived",
  components: {
    BaseSpinner,
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      dataStartIndex: 0,
      perPage: 2,
      navLimit: 5,
      navStartIndex: 0,
      activeNav: 0,
    };
  },
  methods: {
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
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("request/fetchRequests");
      } catch (error) {
        this.error = error;
      }

      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters("request", ["hastRequestCoach"]),
    paginationData() {
      const requests = this.$store.getters["request/requests"];
      const FilteredRequest = requests.slice(this.dataStartIndex, this.dataStartIndex + this.perPage);
      return FilteredRequest;
    },
    navigationData() {
      const requests = this.$store.getters["request/requests"];
      const totalFilteredReq = requests.length;
      let numOfPage = 1;
      if (totalFilteredReq > this.perPage) {
        numOfPage = Math.ceil(totalFilteredReq / this.perPage);
      }
      const naviData = Array.from(Array(numOfPage).keys());
      if (naviData.length > 1) {
        return naviData.slice(this.navStartIndex, this.navStartIndex + this.navLimit);
      }
      return naviData;
    },
    isDisabled() {
      const requests = this.$store.getters["request/requests"];
      const totalFilteredReq = requests.length;
      let numOfPage = 1;
      if (totalFilteredReq > this.navLimit) {
        numOfPage = Math.ceil(totalFilteredReq / this.perPage);
      }
      const naviData = Array.from(Array(numOfPage).keys());
      return this.navStartIndex + this.navLimit >= naviData.length;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style></style>
