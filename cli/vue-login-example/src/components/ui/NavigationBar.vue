<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container px-3">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto1">
          <button @click="logout" v-if="isLoggedIn" class="btn btn-danger">Logout</button>
          <button @click="login" v-else class="btn btn-success">Login</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  computed: {
    isLoggedIn() {
      return this.$store.getters["isAuthenticated"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace({ name: "home" });
    },
    login() {
      this.$router.replace({ name: "login" });
    },
  },
};
</script>
