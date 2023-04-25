<template>
  <nav class="navbar navbar-dark flex-wrap flex-lg-nowrap bg-dark">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="text-light navbar-brand p-0 ms-3 me-0 me-lg-2">Coach Finder</router-link>
      </div>
      <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <router-link to="/" class="offcanvas-title nav-link text-light" id="offcanvasNavbarLabel">Coach Finder</router-link>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/coaches">Coaches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/requests">Requests</router-link>
            </li>
          </ul>
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
