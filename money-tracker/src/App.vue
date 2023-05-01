<template>
  <NavigationBar />
  <div class="container my-5">
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style></style>
