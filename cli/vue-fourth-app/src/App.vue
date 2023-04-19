<template>
  <div class="container">
    <TheForm />
  </div>
</template>

<script>
import TheForm from "./components/TheForm.vue";

export default {
  name: "App",
  components: {
    TheForm,
  },
};
</script>

<style>
body {
  background-color: #000;
  font-family: sans-serif;
}

.container {
  margin-top: 3%;
  display: flex;
  justify-content: center;
}
</style>
