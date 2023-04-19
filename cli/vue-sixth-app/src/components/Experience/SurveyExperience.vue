<template>
  <CardContainer>
    <h3 class="fw-bold">How was your learning experience?</h3>
    <div v-if="isInvalidated && isSubmit" class="alert alert-warning" role="alert"><strong>One or more input fields are invalid. Please check your provided data.</strong></div>
    <div v-if="isError" class="alert alert-danger" role="alert">
      <strong>{{ defaultMessage }}</strong>
    </div>
    <form class="mt-2" @submit.prevent="submitSurvey">
      <div class="mb-3">
        <label for="username" class="form-label fw-bold">Your Name</label>
        <input type="text" class="form-control" id="username" v-model="name" required />
      </div>
      <div class="mb-3">
        <label class="form-label fw-bold">My Learning Experience Was ...</label>
        <div class="form-check">
          <input v-model="rating" value="poor" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioPoor" />
          <label class="form-check-label" for="flexRadioPoor">Poor</label>
        </div>
        <div class="form-check">
          <input v-model="rating" value="average" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioAvg" />
          <label class="form-check-label" for="flexRadioAvg">Average</label>
        </div>
        <div class="form-check">
          <input v-model="rating" value="great" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioGreat" />
          <label class="form-check-label" for="flexRadioGreat">Great</label>
        </div>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-dark w-25">Submit</button>
      </div>
    </form>
  </CardContainer>
</template>

<script>
import CardContainer from "../UI/CardContainer.vue";

export default {
  name: "SurveyExperience",
  components: {
    CardContainer,
  },
  data() {
    return {
      name: "",
      rating: "",
      isSubmit: false,
      isError: false,
      defaultMessage: "",
    };
  },
  methods: {
    submitSurvey() {
      this.isSubmit = true;
      this.isError = false;
      this.defaultMessage = "";
      if (!this.isInvalidated) {
        const submittedData = {
          name: this.name,
          rating: this.rating,
        };

        fetch("https://vue-http-demo-c26e6-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submittedData),
        }).catch((err) => {
          console.log(err);
          this.isError = true;
          this.defaultMessage = err;
        });

        this.name = "";
        this.rating = "";
        this.isSubmit = false;
      }
    },
  },
  computed: {
    isInvalidated() {
      return this.rating === "";
    },
  },
};
</script>

<style></style>
