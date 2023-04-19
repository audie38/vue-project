<template>
  <div class="container my-5">
    <SurveyExperience @submit-survey="addSurvey" />
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
  methods: {
    addSurvey(data) {
      const surveyResult = {
        id: +new Date(),
        name: data.name,
        rating: data.rating,
      };

      this.surveys.push(surveyResult);
    },
  },
};
</script>

<style></style>
