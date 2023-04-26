<template>
  <div class="d-flex justify-content-center align-items-center">
    <base-card class="w-75">
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
  methods: {
    login(account) {
      console.log(JSON.stringify(account));
    },
  },
};
</script>
