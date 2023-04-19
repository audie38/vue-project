<template>
  <CardContainer class="w-75">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img :src="ProductItem.image" :alt="ProductItem.title" class="card-img-top img-fluid w-25 h-25 rounded-5" />
      <h5 class="fw-bold">{{ ProductItem.title }}</h5>
      <div class="row w-100">
        <div class="col-8">
          <p class="card-text">
            Price per Item: <span class="fw-bold">${{ ProductItem.price }}</span>
          </p>
        </div>
        <div class="col-4">
          <p class="card-text">
            Quantity: <span class="fw-bold">{{ ProductItem.qty }}</span>
          </p>
        </div>
      </div>
      <hr class="w-100" />
      <h5 class="fw-bold">Total: ${{ ProductItem.qty * ProductItem.price }}</h5>
      <hr class="w-100" />
    </div>
    <button @click="removeItem" class="btn btn-danger">Remove</button>
  </CardContainer>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";

export default {
  name: "CartItem",
  components: {
    CardContainer,
  },
  props: {
    ProductItem: {
      type: Object,
      required: false,
      default() {
        return {
          id: 0,
          title: "",
          price: 0,
          qty: 0,
          image: "",
        };
      },
    },
  },
  methods: {
    removeItem() {
      const productData = {
        id: this.ProductItem.id,
        title: this.ProductItem.title,
        price: this.ProductItem.price,
        image: this.ProductItem.image,
        qty: this.ProductItem.qty,
      };
      this.$store.dispatch({
        type: "cart/removeFromCart",
        item: productData,
      });
    },
  },
};
</script>

<style></style>
