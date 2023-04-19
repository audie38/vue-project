<template>
  <form @submit.prevent="submitForm">
    <label class="fw-bold" for="name">Your Name</label>
    <input class="w-100" type="text" id="name" v-model="name" />
    <label class="fw-bold" for="age">Your Age (Years)</label>
    <input class="w-100" type="number" id="age" v-model="age" />
    <label class="fw-bold" for="sourcemethod">How did you hear about us?</label>
    <select name="sourcemethod" id="sourcemethod" v-model="source">
      <option value="google">Google</option>
      <option value="facebook">Facebook</option>
      <option value="twitter">Twitter</option>
    </select>
    <label class="fw-bold" for="interest">What are you interested in?</label>
    <div class="row">
      <input type="checkbox" id="news" value="news" v-model="interest" />
      <label for="news">News</label><br />
    </div>
    <div class="row">
      <input type="checkbox" id="tutorials" value="tutorials" v-model="interest" />
      <label for="tutorials">Tutorials</label><br />
    </div>
    <div class="row">
      <input type="checkbox" id="nothing" value="nothing" v-model="interest" />
      <label for="nothing">Nothing</label><br />
    </div>

    <label class="fw-bold" for="learning">How do you learn?</label>
    <div class="row">
      <input type="radio" id="video" name="learningmethod" value="video" v-model="learningMethod" />
      <label for="video">Video Coruses</label><br />
    </div>
    <div class="row">
      <input type="radio" id="Blogs" name="learningmethod" value="Blogs" v-model="learningMethod" />
      <label for="Blogs">Blogs</label><br />
    </div>
    <div class="row">
      <input type="radio" id="Other" name="learningmethod" value="Other" v-model="learningMethod" />
      <label for="Other">Other</label><br />
    </div>

    <button type="submit" class="btn btn-primary">Save Data</button>
  </form>
</template>

<script>
export default {
  name: "TheForm",
  data() {
    return {
      name: "",
      age: null,
      source: "google",
      interest: [],
      learningMethod: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        age: this.age,
        source: this.source,
        interest: this.interest,
        learningMethod: this.learningMethod,
      };

      console.log(JSON.stringify(data));

      this.resetForm();
    },
    resetForm() {
      this.name = "";
      this.age = null;
      this.source = "google";
      this.interest = [];
      this.learningMethod = "";
    },
  },
};
</script>

<style scoped>
form {
  background-color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  padding: 2%;
  line-height: 2rem;
  box-sizing: border-box;
}

form .row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
}

form input {
  text-transform: capitalize;
}

form input[type="checkbox"] {
  margin: 0 10px 0 0;
}

.w-100 {
  width: 100%;
}

.fw-bold {
  font-weight: bold;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 0px;
  border-radius: 20px;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #144989;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}
</style>
