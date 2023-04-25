export default {
  registerCoach(state, payload) {
    state.isCoach = true;
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};
