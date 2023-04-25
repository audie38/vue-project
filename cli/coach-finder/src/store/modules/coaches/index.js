import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 1,
          firstName: "Audie",
          lastName: "Milson",
          areas: ["frontend", "backend", "career"],
          description: "I'm Milson and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 2,
          firstName: "Ichigo",
          lastName: "Kurosaki",
          areas: ["frontend", "career"],
          description: "I am Ichigo Substitue Soul Reaper",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
