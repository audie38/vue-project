<template>
  <CardContainer>
    <div class="row">
      <div class="col-4 text-center">
        <img :src="productItem.image" class="img-fluid rounded-start customImgSize" :alt="productItem.title" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{ productItem.title }}</h5>
          <span class="badge rounded-pill text-bg-warning px-3 py-2">$ {{ productItem.price }}</span>
          <p class="card-text">{{ productItem.description }}</p>
          <button @click="addToCart" class="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";
export default {
  name: "ProductItem",
  components: {
    CardContainer,
  },
  props: {
    productItem: {
      type: Object,
      required: false,
      default() {
        return {
          image: "",
          title: "",
          description: "",
          price: 0.0,
        };
      },
    },
  },
  methods: {
    addToCart() {
      const productData = {
        id: this.productItem.id,
        title: this.productItem.title,
        price: this.productItem.price,
        image: this.productItem.image,
        qty: 1,
      };
      this.$store.dispatch({
        type: "cart/addToCart",
        item: productData,
      });
    },
  },
};
</script>

<style scoped>
.customImgSize {
  height: 150px;
}
</style>
