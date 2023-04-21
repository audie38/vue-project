<template>
  <base-card class="mx-3">
    <h3 class="fw-bold">{{ fullName }}</h3>
    <h5 class="fw-bold">${{ coachData.hourlyRate }}/hour</h5>
    <div class="d-flex justify-content-start align-items-center">
      <span v-for="area in coachData.areas" :key="area" :class="colorByVal(area)">{{ area }}</span>
    </div>
    <div class="d-flex justify-content-end align-items-center my-3">
      <router-link class="btn btn-outline-dark w-25 me-2" :to="coachContactLink">Contact</router-link>
      <router-link class="btn btn-dark w-25 me-2" :to="coachDetailsLink">View Details</router-link>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "CoachItem",
  components: {},
  props: {
    coachData: {
      type: Object,
      required: false,
      default() {
        return {
          firstName: "",
          lastName: "",
          areas: [],
          description: "",
          hourlyRate: 0,
        };
      },
    },
  },
  inject: ["badgeColors"],
  data() {
    return {
      badgeClass: "badge p-2 me-1 text-uppercase text-bg-",
    };
  },
  methods: {
    colorClass(idx) {
      const badgeColorsLength = this.badgeColors.length;
      return this.badgeClass + this.badgeColors[idx % badgeColorsLength];
    },
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
      return `${this.coachData.firstName} ${this.coachData.lastName}`;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.coachData.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.coachData.id;
    },
  },
};
</script>

<style></style>
