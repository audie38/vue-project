export default {
  async addRequest(context, payload) {
    const newReq = {
      userEmail: payload.email,
      userMessage: payload.message,
    };

    const response = await fetch(`${process.env.VUE_APP_FIREBASE_URL}/requests/${payload.coachId}.json`, {
      method: "POST",
      body: JSON.stringify(newReq),
    });

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to send request");
    }

    const responseData = await response.json();
    newReq.id = responseData.name;
    newReq.coachId = payload.coachId;

    context.commit("addRequest", newReq);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`${process.env.VUE_APP_FIREBASE_URL}/requests/${coachId}.json`, {
      method: "GET",
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Failed to fetch requests");
    }

    const requests = [];

    for (const data in responseData) {
      const request = {
        id: data,
        coachId: coachId,
        userEmail: responseData[data].userEmail,
        userMessage: responseData[data].userMessage,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
