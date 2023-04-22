<template>
  <div class="container my-5">
    <PageNavigation :tableData="sampleData" :naviData="navigationData" :perPage="perPage" :navLimit="10" />
  </div>
</template>

<script>
import PageNavigation from "./components/PageNavigation.vue";
export default {
  name: "App",
  components: {
    PageNavigation,
  },
  data() {
    return {
      totalData: 100,
      perPage: 10,
    };
  },
  computed: {
    sampleData() {
      return Array.from(Array(this.totalData).keys());
    },
    navigationData() {
      const numOfPage = this.totalData / this.perPage;
      return Array.from(Array(numOfPage).keys());
    },
  },
};
</script>

<style></style>
