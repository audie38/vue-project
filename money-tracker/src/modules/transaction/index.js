import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const trxModule = {
  namespaced: true,
  state() {
    return {};
  },
  mutations,
  actions,
  getters,
};

export default trxModule;
