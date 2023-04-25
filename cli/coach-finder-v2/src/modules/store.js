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
      userId: "c4",
    };
  },
});

export default store;
