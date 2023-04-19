<template>
  <div class="d-flex flex-column justify-content-center align-items-center w-100">
    <h1>Your Cart</h1>
    <hr class="w-100" />
    <h3>
      Total Amount:
      <span class="badge rounded-pill text-bg-dark customPositioning"> ${{ parseFloat(CartItems.total).toFixed(2) }} </span>
    </h3>
    <CartItem v-for="item in CartItems.items" :key="item.id" :ProductItem="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", ["CartItems"]),
  },
};
</script>

<style></style>
