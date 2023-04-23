export default {
  addRequest(context, payload) {
    const newReq = {
      id: +new Date(),
      coachId: payload.coachId,
      userEmail: payload.email,
      userMessage: payload.message,
    };
    console.log(newReq);
    context.commit("addRequest", newReq);
  },
};
