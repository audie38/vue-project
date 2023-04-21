import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

const requestsModule = {
  namespaced: true,
  state() {
    return {};
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default requestsModule;
