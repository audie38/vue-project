<template>
  <div class="d-flex justify-content-center align-items-center">
    <base-card class="w-75">
      <RegisForm @submit-regis="regisAccount" />
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
  methods: {
    regisAccount(data) {
      console.log(JSON.stringify(data));
    },
  },
};
</script>
