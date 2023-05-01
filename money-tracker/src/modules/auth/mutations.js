export default {
  login(state) {
    state.isAuth = true;
  },
  logout(state) {
    state.isAuth = false;
  },
  auth(state, payload) {
    state.isAuth = payload;
  },
};
