export default {
  async login(context, payload) {
    const response = await fetch(`${process.env.VUE_APP_AUTH_URL}`, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log("login error: ", responseData);
      throw new Error(responseData.error.message || "Failed to Authenticate");
    }

    console.log("login response: ", responseData);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload) {
    const response = await fetch(`${process.env.VUE_APP_REGIS_URL}`, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log("signup error: ", responseData);
      throw new Error(responseData.error.message || "Failed to Authenticate");
    }

    console.log("signup response: ", responseData);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
