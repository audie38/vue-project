import authMutations from "./mutations.js";
import authActions from "./actions.js";
import authGetters from "./getters.js";

const authModule = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};

export default authModule;
