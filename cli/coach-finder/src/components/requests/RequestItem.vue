<template>
  <base-card class="w-100 shadow-sm">
    <div class="d-flex flex-column justify-content-start align-items-start">
      <a :href="emailLink">{{ email }}</a>
      <span>{{ message }}</span>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "RequestItem",
  props: {
    email: {
      type: String,
      required: false,
      default: "",
    },
    message: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    emailLink() {
      return `mailto:${this.email}`;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #7811f0;
}
</style>
