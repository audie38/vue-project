import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const walletModule = {
  namespaced: true,
  state() {
    return {
      wallet: [
        {
          walletId: 1,
          userId: 1,
          walletName: "Test",
          balance: 0,
          currency: "idr",
        },
        {
          walletId: 2,
          userId: 1,
          walletName: "Test 2",
          balance: 0,
          currency: "idr",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default walletModule;
