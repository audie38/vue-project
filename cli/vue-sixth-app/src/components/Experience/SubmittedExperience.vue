<template>
  <CardContainer>
    <h3 class="fw-bold">Submitted Experiences</h3>
    <button @click="toggleLoadSubmitted" class="btn btn-dark w-50">{{ this.isLoadSubmitted ? "Unload" : "Load" }} Submitted Experiences</button>
    <div v-if="isLoading" class="d-flex align-items-center my-2">
      <strong>Loading...</strong>
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
    <div v-else-if="isError" class="my-2 text-start">
      <p>{{ defaultMessage }}</p>
    </div>
    <div v-else>
      <div v-if="isLoadSubmitted">
        <div v-for="survey in surveyData" :key="survey.id" class="card px-3 py-2 my-2">
          <p class="text-capitalize">
            <strong>{{ survey.name }}</strong> rated the learning experience <span :class="ratingColor(survey.rating)">{{ survey.rating }}</span>
          </p>
        </div>
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
  data() {
    return {
      loadText: "Load",
      isLoadSubmitted: false,
      isLoading: false,
      isError: false,
      defaultMessage: "No Stored Experiences found. Start Adding some survey results",
      surveyData: [],
    };
  },
  methods: {
    toggleLoadSubmitted() {
      this.isLoadSubmitted = !this.isLoadSubmitted;
      if (this.isLoadSubmitted) {
        this.loadData();
      }
    },
    loadData() {
      this.isLoading = true;
      this.isError = false;
      fetch(`${process.env.VUE_APP_FIREBASE_URL}/surveys.json`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({ id: id, name: data[id].name, rating: data[id].rating });
          }

          this.surveyData = results;

          if (this.surveyData.length < 1) {
            this.isError = true;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.isError = true;
          console.log(err);
          this.defaultMessage = "Failed to fetch data - please try again later";
        });
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
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
