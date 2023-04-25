import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const requestModule = {
  namespaced: true,
  state() {
    return {
      requests: [],
      coachHasReq: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default requestModule;
