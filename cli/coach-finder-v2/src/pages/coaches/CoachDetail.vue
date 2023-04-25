<template>
  <base-card>
    <h3 class="fw-bold">{{ fullName }}</h3>
    <h4>${{ coach.hourlyRate }}/hour</h4>
  </base-card>
  <base-card>
    <div class="d-flex flex-column justify-content-start">
      <h3 class="fw-bold">Interested? Reach out now!</h3>
      <button v-if="!isLoading" @click="showContactForm = !showContactForm" class="btn btn-dark w-100">Contact</button>
      <button v-else class="btn btn-dark" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Sending...
      </button>
    </div>
    <div class="my-3" v-if="showContactForm">
      <RequestForm @send-message="sendMessage" />
    </div>
  </base-card>
  <base-card>
    <div class="d-flex justify-content-start align-items-center mb-2">
      <span v-for="area in coach.areas" :key="area" :class="badgeColor(area)">{{ area }}</span>
    </div>
    <span>{{ coach.description }}</span>
  </base-card>
</template>

<script>
import RequestForm from "@/components/requests/RequestForm.vue";

export default {
  name: "CoachDetail",
  components: {
    RequestForm,
  },
  props: ["id"],
  data() {
    return {
      coach: {},
      isLoading: false,
      showContactForm: false,
      badgeClass: "badge me-2 text-uppercase p-2 text-bg-",
    };
  },
  methods: {
    async loadCoaches() {
      this.error = null;
      this.isLoading = true;
      try {
        await this.$store.dispatch("coach/fetchCoachData");
        await this.setCoachData();
      } catch (err) {
        this.error = err.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    setCoachData() {
      this.coach = this.$store.getters["coach/coachList"].find((coach) => coach.id == this.id);
    },
    badgeColor(exp) {
      if (exp == "frontend") {
        return this.badgeClass + "primary";
      } else if (exp == "backend") {
        return this.badgeClass + "danger";
      } else {
        return this.badgeClass + "success";
      }
    },
    showContact() {
      if (this.$route.fullPath.includes("/contact")) {
        this.showContactForm = true;
      }
    },
    async sendMessage(requestData) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("request/sendMessage", requestData);
      } catch (err) {
        console.log(err);
        alert(`Failed to send message! err: ${err}`);
        this.isLoading = false;
      }
      this.isLoading = false;
    },
  },
  computed: {
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
  },
  created() {
    this.loadCoaches();
    this.showContact();
  },
};
</script>

<style></style>
