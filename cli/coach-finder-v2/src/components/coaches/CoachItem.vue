<template>
  <base-card>
    <h3 class="text-capitalize">{{ fullName }}</h3>
    <p class="fw-bold">${{ data.hourlyRate }}/hour</p>
    <div class="d-flex justify-content-start align-items-center">
      <span v-for="area in data.areas" :key="area" :class="badgeColor(area)">{{ area }}</span>
    </div>
    <div class="d-flex align-items-center mt-3">
      <div class="ms-auto">
        <router-link to="/" class="btn btn-outline-dark me-2">Contact</router-link>
        <router-link to="/" class="btn btn-dark me-2">View Details</router-link>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "CoachItem",
  props: {
    data: {
      type: Object,
      required: false,
      default() {
        return {
          firstName: "",
          lastName: "",
          description: "",
          hourlyRate: 0,
          areas: [],
        };
      },
    },
  },
  data() {
    return {
      expertiseArea: [],
      badgeClass: "badge me-2 text-uppercase p-2 text-bg-",
    };
  },
  methods: {
    badgeColor(exp) {
      if (exp == "frontend") {
        return this.badgeClass + "primary";
      } else if (exp == "backend") {
        return this.badgeClass + "danger";
      } else {
        return this.badgeClass + "success";
      }
    },
  },
  computed: {
    fullName() {
      return `${this.data.firstName} ${this.data.lastName}`;
    },
  },
  created() {},
};
</script>

<style></style>
