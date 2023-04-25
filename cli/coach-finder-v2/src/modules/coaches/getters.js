export default {
  coachList(state) {
    return state.coaches;
  },
  hasCoach(state, getters) {
    return getters.coachList.length > 0;
  },
  isCoach(state) {
    return state.isCoach;
  },
};
