<template>
  <ProductItem v-for="product in listProduct" :key="product.id" :productItem="product" />
</template>

<script>
import { mapGetters } from "vuex";

import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  computed: {
    // listProduct(){
    //   return this.$store.getters["product/listProduct"];
    // },
    ...mapGetters("product", ["listProduct"]),
  },
};
</script>

<style></style>
