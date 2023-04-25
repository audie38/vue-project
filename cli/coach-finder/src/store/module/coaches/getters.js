export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, _, rootState) {
    const userId = rootState.userId;
    return state.coaches.find((coach) => coach.id == userId) !== undefined;
  },
};
