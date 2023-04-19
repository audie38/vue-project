import productMutations from "./mutations.js";
import productActions from "./actions.js";
import productGetters from "./getters.js";

const productModule = {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 1,
          image: "https://cdn.shopify.com/s/files/1/0064/5342/8271/collections/Sweet-Dreams_2048x2048.jpg?v=1625675558",
          title: "Book Collection",
          description: "A Collection of must read books. All time classic included!",
          price: 99.99,
        },
        {
          id: 2,
          image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/22/895773c5-3bf7-4ce1-9510-bea8f1a904fe.jpg",
          title: "Mountain Tent",
          description: "A Tent for the ambitious outdoor tourist",
          price: 129.99,
        },
      ],
    };
  },
  mutations: productMutations,
  actions: productActions,
  getters: productGetters,
};

export default productModule;
