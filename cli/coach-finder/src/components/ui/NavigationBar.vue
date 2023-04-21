<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <router-link class="navbar-brand text-light" to="/">Coach Finder</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link text-light" to="/coaches">Coaches</router-link>
          <router-link class="nav-link text-light" to="/requests">Requests</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>
