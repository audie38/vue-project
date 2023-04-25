import { createStore } from "vuex";
import coachModule from "./coaches/index.js";
import requestModule from "./requests/index.js";

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
  },
});

export default store;
