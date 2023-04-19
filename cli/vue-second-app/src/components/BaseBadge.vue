<template>
  <BaseCard>
    <template v-slot:header>
      <UserInfo :fullname="fullname" :role="role" :desc="desc" />
    </template>
  </BaseCard>
</template>

<script>
import UserInfo from "./UserInfo.vue";
import BaseCard from "./BaseCard.vue";
export default {
  name: "BaseBadge",
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
  components: {
    UserInfo,
    BaseCard,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
