<template>
  <base-alert v-if="isFormInvalid" alertType="danger">{{ alertMessage }}</base-alert>
  <form @submit.prevent="submitForm">
    <div class="my-3">
      <div class="row">
        <div class="col-6">
          <label for="firstName" class="form-label fw-bold">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model.trim="firstName" required />
        </div>
        <div class="col-6">
          <label for="lastName" class="form-label fw-bold">Last Name</label>
          <input type="text" class="form-control" id="lastName" v-model.trim="lastName" required />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="hourlyRate" class="form-label fw-bold">Hourly Rate</label>
      <input type="number" class="form-control" id="hourlyRate" v-model="hourlyRate" required />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label fw-bold">Description</label>
      <textarea class="form-control" id="description" rows="5" v-model="description" required />
    </div>
    <div class="mb-3">
      <label for="Areas" class="form-label fw-bold">Area of Expertise</label>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="frontend" value="frontend" v-model="areas" @change="isFormInvalid = false" />
        <label class="form-check-label" for="frontend">Frontend</label>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="backend" value="backend" v-model="areas" @change="isFormInvalid = false" />
        <label class="form-check-label" for="backend">Backend</label>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="career" value="career" v-model="areas" @change="isFormInvalid = false" />
        <label class="form-check-label" for="career">Career</label>
      </div>
    </div>
    <div class="d-flex">
      <button type="submit" class="btn btn-dark ms-auto w-100">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CoachForm",
  emits: ["add-coach"],
  data() {
    return {
      isFormInvalid: false,
      alertMessage: "",
      firstName: "",
      lastName: "",
      description: "",
      hourlyRate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const coach = {
        firstName: this.firstName,
        lastName: this.lastName,
        hourlyRate: this.hourlyRate,
        description: this.description,
        areas: this.areas,
      };

      if (this.firstName === "" || this.lastName === "" || this.description === "" || !this.hourlyRate || this.hourlyRate < 0 || this.areas.length === 0) {
        this.isFormInvalid = true;
        this.alertMessage = "Please fill all required Fields";
      } else {
        if (confirm("Submit Coach Registration ?")) {
          this.$emit("add-coach", coach);
          this.resetForm();
          this.$router.replace("/");
        }
      }
    },
    resetForm() {
      this.isFormInvalid = false;
      this.alertMessage = "";
      this.firstName = "";
      this.lastName = "";
      this.description = "";
      this.hourlyRate = null;
      this.areas = [];
    },
  },
};
</script>

<style></style>
