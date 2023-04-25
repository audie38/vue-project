<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Coach Finder</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" :to="{ name: 'coaches' }">Coaches</router-link>
          <router-link class="nav-link" :to="{ name: 'requests' }">Requests</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBarMobile",
};
</script>

<style></style>
