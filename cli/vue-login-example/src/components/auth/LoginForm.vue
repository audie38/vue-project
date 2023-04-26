<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label for="userEmail" class="form-label fw-bold">Email</label>
      <input type="email" class="form-control" id="userEmail" v-model.trim="email" @change="isInvalid = false" required />
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label fw-bold">Password</label>
      <input type="password" class="form-control" id="userPassword" v-model.trim="password" @change="isInvalid = false" required />
    </div>
    <div class="mb-2">
      <button v-if="isLoading" class="btn btn-dark w-100" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Login
      </button>
      <button v-else type="submit" class="btn btn-dark w-100">Login</button>
    </div>
    <div class="text-center">
      <span>Don't Have account? <router-link :to="{ name: 'signup' }">Sign Up</router-link></span>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      isInvalid: false,
      email: "",
      password: "",
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["submit-login"],
  methods: {
    login() {
      const account = {
        email: this.email,
        password: this.password,
      };

      this.isInvalid = true;

      if (this.email !== "" && this.password !== "" && this.password.length >= 6) {
        this.isInvalid = false;
        this.$emit("submit-login", account);
        this.resetForm();
      }
    },
    resetForm() {
      this.isInvalid = false;
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
