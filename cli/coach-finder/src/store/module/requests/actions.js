export default {
  addRequest(context, payload) {
    const newReq = {
      id: +new Date(),
      coachId: payload.coachId,
      userEmail: payload.email,
      userMessage: payload.message,
    };
    context.commit("addRequest", newReq);
  },
};
