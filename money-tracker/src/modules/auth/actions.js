export default {
  auth(context, payload) {
    context.commit("auth", payload.value);
  },
};
