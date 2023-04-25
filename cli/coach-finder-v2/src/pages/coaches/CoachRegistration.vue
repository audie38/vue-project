<template>
  <base-card>
    <h3 class="text-center fw-bold">Coach Registration</h3>
    <CoachForm @add-coach="registerCoach" />
  </base-card>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
  name: "CoachRegistration",
  components: {
    CoachForm,
  },
  methods: {
    registerCoach(data) {
      console.log(data);
      this.$store.dispatch("coach/registerNewCoach", data);
    },
  },
};
</script>

<style></style>
