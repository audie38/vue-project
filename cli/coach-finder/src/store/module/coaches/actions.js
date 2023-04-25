export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const data = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
      areas: payload.areas,
    };

    const response = await fetch(`${process.env.VUE_APP_FIREBASE_URL}/coaches/${userId}.json`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      //
    }

    context.commit("registerCoach", {
      ...data,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(`${process.env.VUE_APP_FIREBASE_URL}/coaches.json`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch Data");
      throw error;
    }

    const coaches = [];

    for (const data in responseData) {
      const coach = {
        id: data,
        firstName: responseData[data].firstName,
        lastName: responseData[data].lastName,
        description: responseData[data].description,
        hourlyRate: responseData[data].hourlyRate,
        areas: responseData[data].areas,
      };
      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
  },
};
