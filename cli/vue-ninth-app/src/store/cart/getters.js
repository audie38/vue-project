export default {
  itemInCart(state) {
    console.log(state.carts);
    return state.carts.qty;
  },
  CartItems(state) {
    return state.carts;
  },
};
