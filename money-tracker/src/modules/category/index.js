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
          categoryCode: "Shopping",
          transactionType: "expense",
        },
        {
          id: 2,
          categoryCode: "Salary",
          transactionType: "income",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default categoryModule;
