import { createStore } from "vuex";
import coachModule from "./coaches/index.js";
import requestModule from "./requests/index.js";

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
  },
  state() {
    return {
      userId: "-NTsdHmkaiH5yimBQr34", //"-NTsdHmkaiH5yimBQr34", //"-NTsj0qmVTxJA0xUwOQ2",
    };
  },
  getters: {
    currentLoggedInUser(state) {
      return state.userId;
    },
  },
});

export default store;
