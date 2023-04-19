<template>
  <div class="container my-5">
    <SurveyExperience />
    <SubmittedExperience :surveyData="surveys" />
  </div>
</template>

<script>
import SurveyExperience from "./components/Experience/SurveyExperience.vue";
import SubmittedExperience from "./components/Experience/SubmittedExperience.vue";

export default {
  name: "App",
  components: {
    SurveyExperience,
    SubmittedExperience,
  },
  data() {
    return {
      surveys: [],
    };
  },
  methods: {},
};
</script>

<style></style>
