<template>
  <div :class="alertClass" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseAlerts",
  props: {
    alertType: {
      type: String,
      required: false,
      default: "success",
    },
  },
  computed: {
    alertClass() {
      return `alert fade show alert-${this.alertType}`;
    },
  },
};
</script>

<style></style>
