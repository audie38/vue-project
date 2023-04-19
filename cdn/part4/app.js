const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalItem: "",
    };
  },
  methods: {
    addGoal() {
      if (this.goalItem !== "") {
        this.goals.push(this.goalItem);
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#app");
