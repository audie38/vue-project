<template>
  <base-card class="mx-1">
    <form @submit.prevent="sendMessage">
      <div class="mb-3">
        <label for="email" class="form-label fw-bold">E-Mail Address</label>
        <input type="email" class="form-control" name="email" id="email" v-model.trim="email" required />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label fw-bold">Message</label>
        <textarea class="form-control" id="description" v-model="message" required />
      </div>
      <div class="d-flex">
        <button class="btn btn-dark ms-auto w-100">Send Message</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "RequestForm",
  emits: ["send-message"],
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      const selectedCoachId = this.$route.params.id;
      const loggedInUser = this.$store.getters["currentLoggedInUser"];
      const request = {
        userId: loggedInUser,
        coachId: selectedCoachId,
        email: this.email,
        message: this.message,
      };
      if (confirm("Send message to coach ?")) {
        this.$emit("send-message", request);
        this.resetForm();
        alert("Message sent!");
      }
    },
    resetForm() {
      this.email = "";
      this.message = "";
    },
  },
  created() {},
};
</script>

<style></style>
