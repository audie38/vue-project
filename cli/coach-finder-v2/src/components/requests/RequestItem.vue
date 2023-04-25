<template>
  <base-card>
    <a class="nav-link text-primary" :href="redirectEmailLink">{{ request.email }}</a>
    <span>{{ request.message }}</span>
  </base-card>
</template>

<script>
export default {
  name: "RequestItem",
  props: {
    request: {
      type: Object,
      required: false,
      default() {
        return {
          email: "",
          message: "",
        };
      },
    },
  },
  computed: {
    redirectEmailLink() {
      return `mailto:${this.request.email}`;
    },
  },
};
</script>

<style></style>
