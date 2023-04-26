<template>
  <NavigationBar />
  <div class="container my-5">
    <router-view> </router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title;
      if (to.params.title != undefined) {
        let baseTitle = to.meta.title;
        document.title = baseTitle + " | " + to.params.title;
      }
    },
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
