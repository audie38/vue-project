<template>
  <BaseContainer title="Auth">
    <div class="d-flex justify-content-center align-items-center">
      <button v-if="!isAuth" @click="login" class="btn btn-dark w-25 me-2">Login</button>
      <button v-if="isAuth" @click="logout" class="btn btn-danger w-25 me-2">Logout</button>
    </div>
  </BaseContainer>

  <BaseContainer v-if="isAuth" title="Vuex">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h3>{{ counter }}</h3>
      <button @click="addition" class="btn btn-dark w-25">Add</button>
    </div>
  </BaseContainer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";

export default {
  name: "App",
  components: {
    BaseContainer,
  },
  methods: {
    addition() {
      this.$store.commit({
        type: "numbers/increase",
        value: 5,
      });
    },
    logout() {
      this.$store.dispatch({
        type: "auth/logout",
        isAuth: false,
      });
    },
    ...mapActions("numbers", ["increase"]),
    ...mapActions("auth", ["login"]),
  },
  computed: {
    counter() {
      return this.$store.getters["numbers/normalizedCounter"];
    },
    ...mapGetters("auth", ["isAuth"]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
