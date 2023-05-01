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
          transactionDate: "2023-05-01",
        },
        {
          id: 2,
          walletId: 1,
          categoryId: 2,
          transactionAmount: 0,
          transactionNotes: "",
          transactionDate: "2023-05-01",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default trxModule;
