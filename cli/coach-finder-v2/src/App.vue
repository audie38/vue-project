<template>
  <NavigationBar v-if="toggleBigScreenSize" />
  <NavigationBarMobile v-else />
  <div class="container my-5">
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "@/components/ui/NavigationBar.vue";
import NavigationBarMobile from "@/components/ui/NavigationBarMobile.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    NavigationBarMobile,
  },
  computed: {
    toggleBigScreenSize() {
      if (window.screen.width < 1000) {
        return false;
      } else {
        return true;
      }
    },
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

<style></style>
