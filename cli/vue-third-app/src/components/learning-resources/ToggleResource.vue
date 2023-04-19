<template>
  <div class="my-3">
    <CardContainer>
      <div v-if="isStored" class="d-flex justify-content-start">
        <span @click="toggleStoreClick" :class="activeClass">Stored Resource</span>
        <span @click="toggleAddClick" :class="defaultClass">Add Resource</span>
      </div>
      <div v-else class="d-flex justify-content-start">
        <span @click="toggleStoreClick" :class="defaultClass">Stored Resource</span>
        <span @click="toggleAddClick" :class="activeClass">Add Resource</span>
      </div>
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";

export default {
  name: "ToggleResource",
  components: {
    CardContainer,
  },
  props: {
    isStored: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      activeClass: "bg-danger text-light px-3 py-2 clickable",
      defaultClass: "text-danger ms-2 px-3 py-2 clickable",
    };
  },
  methods: {
    toggleStoreClick() {
      this.$emit("toggle-store");
    },
    toggleAddClick() {
      this.$emit("toggle-add");
    },
  },
};
</script>

<style scoped>
.clickable {
  text-decoration: none;
  cursor: pointer;
}
</style>
