import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const categoryModule = {
  namespaced: true,
  state() {
    return {
      category: [
        {
          id: 1,
          categoryCode: "Salary",
        },
        {
          id: 2,
          categoryCode: "Shopping",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default categoryModule;
