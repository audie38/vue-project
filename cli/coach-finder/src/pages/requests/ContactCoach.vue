<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="userEmail" class="form-label fw-bold">Your E-Mail</label>
        <input type="email" class="form-control" id="userEmail" v-model.trim="email" />
      </div>
      <div class="mb-3">
        <label for="userMessage" class="form-label fw-bold">Message</label>
        <textarea class="form-control" id="userMessage" rows="5" v-model="message" />
      </div>
      <button type="submit" class="btn btn-dark w-25">Send Message</button>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "ContactCoach",
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.email !== "" || this.message !== "") {
        this.$store.dispatch("request/addRequest", {
          coachId: this.$route.params.id,
          email: this.email,
          message: this.message,
        });

        this.resetContactForm();
      }
    },
    resetContactForm() {
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style></style>
