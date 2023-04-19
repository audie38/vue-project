<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand fs-3 fw-bold" to="/">VueShop</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link customHover" to="/product">Products</router-link>
          <router-link class="nav-link customHover" to="/cart"
            >Cart
            <span class="badge rounded-pill text-bg-dark customPositioning">{{ itemInCart }}</span>
          </router-link>
          <router-link class="nav-link customHover" to="/">{{ isLoggedIn ? "Logout" : "Login" }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationBar",
  props: ["isLoggedIn"],
  computed: {
    ...mapGetters("cart", ["itemInCart"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a.active {
  font-weight: bold;
  border-bottom: 1px solid #000;
}

.customHover {
  color: #000;
}

.customHover:hover {
  font-weight: bold;
  border-bottom: 1px solid #000;
}
</style>
