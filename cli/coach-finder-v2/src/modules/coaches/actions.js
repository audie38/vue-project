export default {
  async fetchCoachData(context) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/coaches.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const coachData = await response.json();

    if (!response.ok) {
      throw new Error(coachData.message || "Failed to Fetch Coaches Data");
    } else {
      const coaches = [];
      for (let key in coachData) {
        const coach = {
          id: key,
          firstName: coachData[key].firstName,
          lastName: coachData[key].lastName,
          description: coachData[key].description,
          hourlyRate: coachData[key].hourlyRate,
          areas: coachData[key].areas,
        };
        coaches.push(coach);
      }
      context.commit("loadAllCoach", coaches);
    }
  },
  updateRegisterStatus(context) {
    const currentUserId = context.rootState.userId;
    const registerdStatus = context.rootState.coach.coaches.some((coach) => coach.id == currentUserId);
    console.log(currentUserId, registerdStatus);
    context.commit("updateRegisterStatus", registerdStatus);
  },
  async registerNewCoach(context, payload) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/coaches.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const coachData = await response.json();
    console.log(coachData);

    if (!response.ok) {
      throw new Error(coachData.message || "Failed to Register Coach");
    }

    context.commit("registerNewCoach", payload);
  },
};