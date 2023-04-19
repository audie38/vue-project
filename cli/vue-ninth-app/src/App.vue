<template>
  <NavigationBar :isLoggedIn="isLoggedIn" />
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
  data() {
    return {
      isLoggedIn: false,
    };
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
