import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const coachModule = {
  namespaced: true,
  state() {
    return {
      coaches: [],
      isCoach: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default coachModule;
