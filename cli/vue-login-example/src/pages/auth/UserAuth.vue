<template>
  <div class="d-flex justify-content-center align-items-center">
    <base-card class="w-75">
      <base-alert v-if="error" mode="danger" :message="error" />
      <LoginForm @submit-login="login" />
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
        this.$router.replace({ name: "protected" });
      } catch (error) {
        this.error = error;
        this.isLoading = false;
      }
    },
  },
};
</script>
