export default {
  async sendMessage(context, payload) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/requests.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const requestData = await response.json();

    if (!response.ok) {
      throw new Error(requestData.message || "Failed to Send Message");
    }

    const requests = [];
    for (let key in requestData) {
      const req = {
        id: key,
        coachId: requestData[key].coachId,
        email: requestData[key].email,
        message: requestData[key].message,
        userId: requestData[key].userId,
      };
      requests.push(req);
    }

    context.commit("sendMessage", requests);
  },
  async fetchRequests(context) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/requests.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const requestData = await response.json();

    if (!response.ok) {
      throw new Error(requestData.message || "Failed to Fetch Requests");
    }

    const requests = [];
    for (let key in requestData) {
      const req = {
        id: key,
        coachId: requestData[key].coachId,
        email: requestData[key].email,
        message: requestData[key].message,
        userId: requestData[key].userId,
      };
      requests.push(req);
    }

    context.commit("fetchRequests", requests);
  },
  async updateCoachRequestStatus(context) {
    const currentUserId = context.rootState.userId;
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/requests.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const requestData = await response.json();

    if (!response.ok) {
      context.commit("updateCoachRequestStatus", false);
    } else {
      const requests = [];
      for (let key in requestData) {
        const req = {
          id: key,
          coachId: requestData[key].coachId,
          email: requestData[key].email,
          message: requestData[key].message,
          userId: requestData[key].userId,
        };
        requests.push(req);
      }
      const status = requests.some((req) => req.coachId == currentUserId);
      context.commit("updateCoachRequestStatus", status);
    }
  },
};
