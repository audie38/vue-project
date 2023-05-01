export default {
  isAuth(state) {
    return state.isAuth;
  },
  userId(state, getters) {
    if (getters.isAuth) {
      return state.user.userId;
    }
  },
};
