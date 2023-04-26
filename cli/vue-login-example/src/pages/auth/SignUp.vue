<template>
  <div class="d-flex justify-content-center align-items-center">
    <base-card class="w-75">
      <base-spinner v-if="isLoading" />
      <base-alert v-if="error" mode="danger" :message="error.message" />
      <RegisForm @submit-regis="regisAccount" :isFormDisabled="isLoading" />
    </base-card>
  </div>
</template>

<script>
import RegisForm from "@/components/auth/RegisForm.vue";

export default {
  name: "SignUp",
  components: {
    RegisForm,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  methods: {
    async regisAccount(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("signup", data);
        this.isLoading = false;
        alert("Register Success!");
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log("Catch error: ", err.message);
        this.error = err;
        this.isLoading = false;
      }
    },
  },
};
</script>
