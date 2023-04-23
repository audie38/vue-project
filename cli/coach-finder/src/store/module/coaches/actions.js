export default {
  registerCoach(context, payload) {
    const data = {
      id: +new Date(),
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
      areas: payload.areas,
    };
    context.commit("registerCoach", data);
  },
};
