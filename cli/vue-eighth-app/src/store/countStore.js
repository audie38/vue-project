const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
};

export default counterModule;
