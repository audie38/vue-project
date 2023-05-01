<template>
  <base-card class="w-100">
    <base-alert v-if="error || authMessage">
      {{ error || authMessage }}
    </base-alert>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="userEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="userEmail" v-model.trim="email" @change="this.error = null" :disabled="isLoading" />
      </div>
      <div class="mb-3">
        <label for="userPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="userPassword" v-model="password" @change="this.error = null" :disabled="isLoading" />
      </div>
      <div class="mb-3">
        <button v-if="isLoading" type="button" class="btn btn-dark w-100" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
          Login
        </button>
        <button v-else type="submit" class="btn btn-dark w-100">Login</button>
      </div>
      <span class="d-flex flex-row justify-content-center">
        Don't have an account yet?
        <router-link class="ms-2 nav-link text-primary" :to="{ name: 'register' }">Register here</router-link>
      </span>
    </form>
  </base-card>
</template>

<script>
import authMixin from "@/mixins/auth";

export default {
  name: "LoginForm",
  mixins: [authMixin],
  emits: ["submit-login"],
  methods: {
    submitForm() {
      if (this.email === "" || this.password === "") {
        this.error = "Invalid Credentials, Email and Password must be filled";
      } else {
        this.$emit("submit-login");
      }
    },
  },
};
</script>
