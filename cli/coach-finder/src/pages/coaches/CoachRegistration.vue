<template>
  <base-card>
    <h2 class="mt-1 mb-4">Register as a Coach now!</h2>

    <CoachForm @register-coach="addCoach" />
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
    addCoach(data) {
      if (confirm("Submit Coach Registration ?")) {
        this.$store.dispatch("coach/registerCoach", data);
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style></style>
