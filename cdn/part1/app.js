const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
      pilContainerStyle: "card rounded-5 bg-success w-100 text-light d-flex justify-content-center align-items-center fs-4 pt-2 my-2 fw-bold",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      }

      return this.courseGoalB;
    },
  },
});

app.mount("#app");
