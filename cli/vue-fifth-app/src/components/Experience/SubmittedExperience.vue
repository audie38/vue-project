<template>
  <CardContainer>
    <h3 class="fw-bold">Submitted Experiences</h3>
    <button @click="toggleLoadSubmitted" class="btn btn-dark w-50">{{ this.isLoadSubmitted ? "Unload" : "Load" }} Submitted Experiences</button>
    <div v-if="isLoadSubmitted">
      <div v-for="survey in surveyData" :key="survey.id" class="card px-3 py-2 my-2">
        <p class="text-capitalize">
          <strong>{{ survey.name }}</strong> rated the learning experience <span :class="ratingColor(survey.rating)">{{ survey.rating }}</span>
        </p>
      </div>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "../UI/CardContainer.vue";

export default {
  name: "SubmittedExperience",
  components: {
    CardContainer,
  },
  props: ["surveyData"],
  data() {
    return {
      loadText: "Load",
      isLoadSubmitted: false,
    };
  },
  methods: {
    toggleLoadSubmitted() {
      this.isLoadSubmitted = !this.isLoadSubmitted;
    },
    ratingColor(rating) {
      if (rating.toLowerCase() === "poor") {
        return "text-danger";
      } else if (rating.toLowerCase() === "average") {
        return "text-warning";
      } else {
        return "text-primary";
      }
    },
  },
  computed: {},
};
</script>

<style></style>
