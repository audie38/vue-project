<template>
  <base-alert v-if="isInvalid" mode="warning" message="There is already an account registered with this email" />
  <form @submit.prevent="register">
    <div class="mb-3">
      <label for="userEmail" class="form-label fw-bold">Email</label>
      <input type="email" class="form-control" id="userEmail" v-model.trim="email" @change="isInvalid = false" required />
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label fw-bold">Password</label>
      <input type="password" class="form-control" id="userPassword" v-model.trim="password" @change="passwordValidator" required />
      <div v-if="isToShort" class="form-text text-danger">Password must contains at least 6 character</div>
    </div>
    <div class="mb-3">
      <label for="userPasswordConfirmation" class="form-label fw-bold">Password Confirmation</label>
      <input type="password" class="form-control" id="userPasswordConfirmation" v-model.trim="passwordConfirmation" @change="passwordValidator" required />
      <div v-if="isNotMatch" class="form-text text-danger">Password Confirmation does not Match</div>
    </div>
    <div class="my-2">
      <button type="submit" class="btn btn-dark w-100">Sign Up</button>
    </div>
    <div class="text-center">
      <span>Already have an account? <router-link :to="{ name: 'login' }">Login</router-link></span>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisForm",
  emits: ["submit-regis"],
  data() {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      isInvalid: false,
      isNotMatch: false,
      isToShort: false,
    };
  },
  methods: {
    passwordValidator() {
      this.isInvalid = false;
      this.isToShort = false;

      if (this.password !== "") {
        if (this.password.length < 6) {
          this.isToShort = true;
        } else {
          this.isNotMatch = this.password !== this.passwordConfirmation;
        }
      }
    },
    register() {
      const account = {
        email: this.email,
        password: this.password,
      };

      this.isInvalid = true;

      if (this.email !== "" && this.password !== "" && this.password.length >= 6) {
        this.isInvalid = false;
        if (confirm("Submit Account Registration ?")) {
          this.$emit("submit-regis", account);
          this.resetForm();
          this.$router.replace({ name: "login" });
        }
      }
    },
    resetForm() {
      this.isInvalid = false;
      this.isNotMatch = false;
      this.isToShort = false;
      this.email = "";
      this.password = "";
      this.passwordConfirmation = "";
    },
  },
  computed: {},
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
