<template>
  <base-card class="w-100">
    <base-alert v-if="error || authMessage">
      {{ error || authMessage }}
    </base-alert>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <div class="row">
          <div class="col-6">
            <label for="userFirstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="userFirstName" v-model.trim="firstName" @change="this.error = null" required :disabled="isLoading" />
          </div>
          <div class="col-6">
            <label for="userLastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="userLastName" v-model.trim="lastName" @change="this.error = null" required :disabled="isLoading" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="userEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="userEmail" v-model.trim="email" @change="this.error = null" required :disabled="isLoading" />
      </div>
      <div class="mb-3">
        <label for="userPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="userPassword" v-model="password" @change="this.error = null" required :disabled="isLoading" />
      </div>
      <div class="mb-3">
        <label for="userPasswordConfirm" class="form-label">Password Confirmation</label>
        <input type="password" class="form-control" id="userPasswordConfirm" v-model="passwordConfirm" @change="this.error = null" required :disabled="isLoading" />
        <div v-if="isPasswordNotMatch" class="form-text text-danger">Password and Password Confirmation not the same</div>
      </div>
      <div class="mb-3">
        <button v-if="isLoading" type="button" class="btn btn-dark w-100" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
          Register
        </button>
        <button v-else type="submit" class="btn btn-dark w-100">Register</button>
      </div>
      <span class="d-flex flex-row justify-content-center">
        Already have an account?
        <router-link class="ms-2 nav-link text-primary" :to="{ name: 'login' }">Login</router-link>
      </span>
    </form>
  </base-card>
</template>

<script>
import authMixin from "@/mixins/auth";

export default {
  name: "RegisterForm",
  mixins: [authMixin],
  emits: ["submit-regis"],
  data() {
    return {};
  },
  methods: {
    submitForm() {
      if (this.firstName === "" || this.lastName === "" || this.email === "" || this.password === "" || this.passwordConfirm === "") {
        this.error = "Please fill all fields";
      } else {
        if (this.password.length < 6) {
          this.error = "Password length have minimum length of 8";
        } else {
          this.$emit("submit-regis");
        }
      }
    },
  },
  computed: {
    isPasswordNotMatch() {
      let isMatch = false;
      if (this.password !== "") {
        isMatch = this.password !== this.passwordConfirm;
      }
      return isMatch;
    },
  },
};
</script>
