export default {
  loadAllCoach(state, payload) {
    state.coaches = payload;
  },
  updateRegisterStatus(state, payload) {
    state.isCoach = payload;
  },
};
