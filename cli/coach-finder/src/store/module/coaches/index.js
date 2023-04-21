import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

const coachModule = {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 1,
          firstName: "Maximilian",
          lastName: "Schwarzmuller",
          areas: ["frontend", "backend", "career"],
          description: "I'm Maximilian and I've Worked as Freelance Web Developer for years",
          hourlyRate: 30,
        },
        {
          id: 2,
          firstName: "Audie",
          lastName: "Milson",
          areas: ["frontend", "backend"],
          description: "I'm Audie Milson and I've Worked as Senior Web Developer for years",
          hourlyRate: 18,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default coachModule;
