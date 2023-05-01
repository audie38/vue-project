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
          transactionType: "income",
          transactionAmount: 7000000,
          transactionNotes: "",
          transactionDate: "2023-05-01",
        },
        {
          id: 2,
          walletId: 1,
          categoryId: 2,
          transactionType: "expense",
          transactionAmount: 3000000,
          transactionNotes: "",
          transactionDate: "2023-05-01",
        },
        {
          id: 3,
          walletId: 1,
          categoryId: 2,
          transactionType: "expense",
          transactionAmount: 300000,
          transactionNotes: "",
          transactionDate: "2023-05-02",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default trxModule;
