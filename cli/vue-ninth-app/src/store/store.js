import { createStore } from "vuex";
import cartModule from "./cart/index.js";
import productModule from "./product/index.js";

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  },
});

export default store;
