<template>
  <div v-if="!formIsValid" class="alert alert-warning fade show" role="alert">Please input all the fields</div>
  <form @submit.prevent="registerCoach">
    <div class="mb-3">
      <div class="row">
        <div class="col-6">
          <label for="coachFirstName" class="form-label fw-bold">First Name</label>
          <input type="text" class="form-control" id="coachFirstName" v-model.trim="firstName" @change="formIsValid = true" />
        </div>
        <div class="col-6">
          <label for="coachLastName" class="form-label fw-bold">Last Name</label>
          <input type="text" class="form-control" id="coachLastName" v-model.trim="lastName" @change="formIsValid = true" />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="coachDescription" class="form-label fw-bold">Description</label>
      <textarea class="form-control" id="coachDescription" v-model="description" rows="5" @change="formIsValid = true" />
    </div>
    <div class="mb-3">
      <label for="coachRate" class="form-label fw-bold">Hourly Rate</label>
      <input type="number" class="form-control" id="coachRate" v-model="rate" @change="formIsValid = true" />
    </div>
    <div class="mb-3">
      <label class="form-label fw-bold">Areas of Experties</label>
      <div class="d-flex flex-column justify-content-start align-items-start">
        <div class="me-2">
          <input class="me-1" value="frontend" type="checkbox" id="frontend" v-model="areas" @change="formIsValid = true" />
          <label for="frontend">Frontend Development</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="backend" type="checkbox" id="backend" v-model="areas" @change="formIsValid = true" />
          <label for="backend">Backend Development</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="career" type="checkbox" id="career" v-model="areas" @change="formIsValid = true" />
          <label for="career">Career Development</label>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-dark w-25">Submit</button>
  </form>
</template>

<script>
export default {
  name: "CoachForm",
  emits: ["register-coach"],
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      rate: null,
      areas: [],
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      if (this.firstName === "" || this.lastName === "" || this.description === "" || !this.rate || this.rate < 0 || this.areas.length === 0) {
        this.formIsValid = false;
      }
    },
    registerCoach() {
      this.validateForm();
      if (this.formIsValid) {
        const newCoach = {
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.description,
          hourlyRate: this.rate,
          areas: this.areas,
        };
        this.$emit("register-coach", newCoach);
      }
    },
  },
};
</script>

<style></style>
