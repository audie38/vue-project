<template>
  <div class="d-flex justify-content-center">
    <RegisterForm @submit-regis="register" :authMessage="message" :isLoading="isLoading" />
  </div>
</template>

<script>
import RegisterForm from "@/components/auth/RegisterForm.vue";

export default {
  name: "AuthLogin",
  components: {
    RegisterForm,
  },
  data() {
    return {
      isLoading: false,
      message: "",
    };
  },
  methods: {
    register() {
      this.isLoading = true;
      try {
        this.$store.dispatch("auth/auth", { value: true });
        this.isLoading = false;
        this.$router.replace({ name: "home" });
      } catch (error) {
        this.message = error;
        this.isLoading = false;
      }
    },
  },
};
</script>
