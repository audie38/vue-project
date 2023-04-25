import axios from "axios";

export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const data = {
      id: userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
      areas: payload.areas,
    };

    await axios
      .post(`${process.env.VUE_APP_FIREBASE_URL}/coaches.json`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    context.commit("registerCoach", data);
  },
  async loadCoaches(context) {
    await axios
      .get(`${process.env.VUE_APP_FIREBASE_URL}/coaches.json`)
      .then((res) => {
        context.commit("setCoaches", res.data);
      })
      .catch((err) => {
        throw new Error(err.message || "Failed to Fetch Data");
      });
  },
};
