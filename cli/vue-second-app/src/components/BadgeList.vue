<template>
  <div>
    <BaseCard>
      <template v-slot:header>
        <h2 class="fw-bold">Available Badges</h2>
        <div class="d-flex flex-rows flex-wrap justify-content-start align-items-center">
          <span v-for="role in roles" :key="role.id" :class="'badge my-1 rounded-pill fs-5 text-uppercase me-2 text-bg-' + role.color">{{ role.name }}</span>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  name: "BadgeList",
  props: ["roles"],
  components: {
    BaseCard,
  },
};
</script>

<style></style>
