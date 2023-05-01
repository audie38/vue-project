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
        firstName: "test",
        lastName: "123",
        email: "test@localhost.com",
        password: "test123",
      },
    };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
