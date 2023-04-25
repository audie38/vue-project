<template>
  <base-card>
    <h3 class="text-center fw-bold">Requests List</h3>
    <div class="text-center my-3" v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <base-spinner v-if="isLoading" />
      <div v-else-if="!isLoading && hasRequests">
        <RequestItem v-for="req in fetchRequests" :key="req.id" :request="req" />
      </div>
      <div class="text-center my-3" v-else>Currently there are No Request</div>
    </div>
  </base-card>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  name: "RequestsList",
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async fetchAllRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("request/fetchRequests");
      } catch (err) {
        this.error = err;
      }
      this.isLoading = false;
    },
    async updateCoachRequestStatus() {
      await this.$store.dispatch("request/updateCoachRequestStatus");
    },
  },
  computed: {
    hasRequests() {
      return this.$store.getters["request/hasRequest"];
    },
    fetchRequests() {
      const allRequests = this.$store.getters["request/loadRequests"];
      const currUserLogin = this.$store.getters["currentLoggedInUser"];
      return allRequests.filter((req) => req.coachId == currUserLogin);
    },
  },
  created() {
    this.fetchAllRequests();
    this.updateCoachRequestStatus();
  },
};
</script>

<style></style>
