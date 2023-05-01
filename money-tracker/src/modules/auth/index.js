import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const authModule = {
  namespaced: true,
  state() {
    return {
      isAuth: false,
      user: {
        userId: 1,
        userName: "Milson",
        password: "test123",
        email: "test@localhost.com",
      },
    };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
