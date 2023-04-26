<template>
  <div :class="alertClass" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    mode: {
      type: String,
      required: false,
      default: "success",
    },
    message: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    alertClass() {
      return `alert alert-${this.mode}`;
    },
  },
};
</script>
