<template>
  <CoachFilter />
  <CoachItem />
</template>

<script>
import CoachFilter from "@/components/coaches/CoachFilter.vue";
import CoachItem from "@/components/coaches/CoachItem.vue";

export default {
  name: "CoachList",
  components: {
    CoachFilter,
    CoachItem,
  },
};
</script>

<style></style>
