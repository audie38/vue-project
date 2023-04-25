export default {
  async sendMessage(context, payload) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/requests.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const requestData = response.json();

    if (!response.ok) {
      throw new Error(requestData.message || "Failed to Send Message");
    }

    context.commit("sendMessage", payload);
  },
};
