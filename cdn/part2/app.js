const app = Vue.createApp({
  data() {
    return {
      pilContainerStyle: "card rounded-5 bg-success w-100 text-light d-flex justify-content-center align-items-center fs-4 pt-2 my-2 fw-bold",
      counter: 0,
      name: "",
      registeredName: "",
      fullNameWatcher: "",
    };
  },
  methods: {
    // Will Re-Executed each time
    // used in event / data binding
    submitForm() {
      alert(`Well Hello ${this.registeredName} !`);
      this.name = this.registeredName;
      this.registeredName = "";
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    // Only Executed if the dependency change
    // Data Binding only
    // use for data that depends on other data
    // Perfomance > method
    fullName() {
      if (this.name !== "") {
        return this.name + " " + "Milson";
      }
    },
  },
  watch: {
    // Penamaan method watcher sesuai dengan data property + () {}
    // Cara kerja watch mirip dengan computed, hanya dijalankan jika value dependency berubah
    // Perfomance > method
    name(value) {
      this.fullNameWatcher = "";
      if (value !== "") {
        this.fullNameWatcher = value + " " + "Milson";
      }
    },
  },
});

app.mount("#app");
