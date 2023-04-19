<template>
  <div class="container my-5 card shadow px-3 py-3 text-center">
    <h1 class="fw-bold">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style></style>
