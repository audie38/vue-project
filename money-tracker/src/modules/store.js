import { createStore } from "vuex";

import authModule from "./auth/index.js";
import trxModule from "./transaction/index.js";
import walletModule from "./wallet/index.js";
import categoryModule from "./category/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    category: categoryModule,
    trx: trxModule,
    wallet: walletModule,
  },
});

export default store;
