export default {
  listOfRequest(state) {
    return state.requests;
  },
  hasRequest(state) {
    return state.requests.length > 0;
  },
};
