<template>
  <div class="my-3">
    <CardContainer>
      <div class="d-flex">
        <h3 class="fw-bold">{{ resource.title }}</h3>
        <span @click="deleteResource" class="text-danger ms-auto pe-3 clickable">Delete</span>
      </div>

      {{ resource.desc }}
      <a :href="resource.link" class="text-warning clickable" target="_blank">View Resource</a>
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";
export default {
  name: "LearningResource",
  components: {
    CardContainer,
  },
  props: {
    resource: {
      type: Object,
      required: false,
      default() {},
    },
  },
  methods: {
    deleteResource() {
      this.$emit("delete-resource", this.resource.id);
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
