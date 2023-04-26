<template>
  <div class="d-flex justify-content-center align-items-center">
    <base-card v-if="isLoggedIn" class="w-75">
      <h1>Welcome</h1>
    </base-card>
    <base-card v-else class="w-75">
      <base-alert v-if="error" mode="danger" :message="error" />
      <LoginForm v-if="!isLoggedIn" @submit-login="login" />
    </base-card>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";

export default {
  name: "UserAuth",
  components: {
    LoginForm,
  },
  data() {
    return {
      isLoggedIn: false,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login(account) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", account);
        this.isLoading = false;
        this.isLoggedIn = true;
      } catch (error) {
        this.error = error;
        this.isLoading = false;
      }
    },
  },
};
</script>
