export default {
  addToCart(state, payload) {
    const existingItemIndex = state.carts.items.findIndex((x) => x.id === payload.item.id);
    const existingItem = state.carts.items.find((x) => x.id === payload.item.id);
    if (existingItemIndex != -1) {
      state.carts.items.splice(existingItemIndex, 1);
      payload.item.qty = existingItem.qty + 1;
      state.carts.items.push(payload.item);
    } else {
      state.carts.items.push(payload.item);
    }

    state.carts.total += payload.item.price;
    state.carts.qty += 1;
  },
  removeFromCart(state, payload) {
    const itemIndex = state.carts.items.findIndex((x) => x.id === payload.item.id);
    if (itemIndex != -1) {
      state.carts.total -= payload.item.price * payload.item.qty;
      if (state.carts.total < 0) {
        state.carts.total = 0;
      }
      state.carts.qty -= payload.item.qty;
      state.carts.items.splice(itemIndex, 1);
    }
  },
};
