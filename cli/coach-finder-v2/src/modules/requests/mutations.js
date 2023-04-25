export default {
  sendMessage(state, payload) {
    state.requests.push(payload);
  },
  fetchRequests(state, payload) {
    state.requests = payload;
  },
  updateCoachRequestStatus(state, payload) {
    state.coachHasReq = payload;
  },
};
