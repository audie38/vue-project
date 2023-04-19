export default {
  login(context) {
    context.commit("setAuth", { isAuth: true });
  },
  logout(context, payload) {
    context.commit("setAuth", payload);
  },
};
