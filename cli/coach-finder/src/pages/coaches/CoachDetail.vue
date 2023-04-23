<template>
  <base-card>
    <h2 class="fw-bold">{{ fullName }}</h2>
    <h3>${{ rate }}/hour</h3>
  </base-card>
  <base-card>
    <h2 class="fw-bold">Interested? Reach out now!</h2>
    <button @click="isContact = !isContact" class="btn btn-dark w-25">Contact</button>
    <ContactCoach v-if="isContact" />
  </base-card>
  <base-card>
    <div class="d-flex justify-content-start align-items-center mb-1">
      <span v-for="area in areas" :key="area" :class="colorByVal(area)">{{ area }}</span>
    </div>
    <p>{{ description }}</p>
  </base-card>
</template>

<script>
import ContactCoach from "../requests/ContactCoach.vue";

export default {
  name: "CoachDetail",
  components: {
    ContactCoach,
  },
  props: ["id"],
  data() {
    return {
      coach: {},
      isContact: false,
      badgeClass: "badge p-2 me-1 text-uppercase text-bg-",
    };
  },
  methods: {
    colorByVal(val) {
      if (val.toLowerCase() === "frontend") {
        return this.badgeClass + "primary";
      } else if (val.toLowerCase() === "backend") {
        return this.badgeClass + "warning";
      } else {
        return this.badgeClass + "danger";
      }
    },
  },
  computed: {
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    areas() {
      return this.coach.areas;
    },
    rate() {
      return this.coach.hourlyRate;
    },
    description() {
      return this.coach.description;
    },
    coachContactLink() {
      return `${this.$route.path}/contact`;
    },
  },
  created() {
    this.isContact = this.$route.fullPath.includes("/contact");
    this.coach = this.$store.getters["coach/coaches"].find((x) => x.id == this.id);
  },
};
</script>

<style></style>
