<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">MoneyTracker</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link @click="logout" v-if="isAuth" class="nav-link" :to="{ name: 'login' }">Logout</router-link>
          <router-link v-else class="nav-link" :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    logout() {
      if (confirm("Logout ?")) {
        this.$store.dispatch("auth/auth", { value: false });
      }
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
};
</script>
