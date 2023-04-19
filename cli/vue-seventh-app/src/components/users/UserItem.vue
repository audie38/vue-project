<template>
  <CardContainer>
    <h3>{{ user.fullName }}</h3>
    <span :class="badgeClass + badgeColor">{{ user.role }}</span>
  </CardContainer>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";

export default {
  name: "UserItem",
  props: {
    user: {
      type: Object,
      required: false,
      default() {
        return {
          fullName: "",
          role: "",
        };
      },
    },
  },
  components: {
    CardContainer,
  },
  data() {
    return {
      badgeClass: "badge rounded-pill w-25 py-2 ",
    };
  },
  computed: {
    badgeColor() {
      if (this.user.role === "Engineer") {
        return "text-bg-primary";
      } else {
        return "text-bg-danger";
      }
    },
  },
};
</script>

<style></style>
