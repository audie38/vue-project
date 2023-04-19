<template>
  <div>
    <div class="row my-3">
      <div class="col-8">
        <h3 class="fw-bold">{{ fullname }}</h3>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <span :class="'badge rounded-pill fs-5 text-uppercase text-bg-' + role.color">{{ role.name }}</span>
      </div>
    </div>
    <div class="row">
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    fullname: {
      type: String,
      required: false,
      default: "",
    },
    role: {
      type: Object,
      required: false,
      default() {},
    },
    desc: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {},
};
</script>

<style></style>
