<template>
  <div class="d-flex justify-content-center">
    <LoginForm @submit-login="login" :authMessage="message" :isLoading="isLoading" />
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";

export default {
  name: "AuthLogin",
  components: {
    LoginForm,
  },
  data() {
    return {
      isLoading: false,
      message: "",
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      try {
        setTimeout(() => {
          this.$store.dispatch("auth/auth", { value: true });
          this.isLoading = false;
          this.$router.replace({ name: "home" });
        }, 500);
      } catch (error) {
        this.message = error;
        this.isLoading = false;
      }
    },
  },
};
</script>
