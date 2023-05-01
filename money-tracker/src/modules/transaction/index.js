import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const trxModule = {
  namespaced: true,
  state() {
    return {
      transaction: [
        {
          id: 1,
          walletId: 1,
          categoryId: 1,
          transactionAmount: 0,
          transactionNotes: "",
        },
        {
          id: 2,
          walletId: 1,
          categoryId: 2,
          transactionAmount: 0,
          transactionNotes: "",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default trxModule;