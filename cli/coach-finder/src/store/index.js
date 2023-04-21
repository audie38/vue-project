import { createStore } from "vuex";
import coachModule from "./module/coaches/index.js";
import requestModule from "./module/requests/index.js";

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
  },
});

export default store;
