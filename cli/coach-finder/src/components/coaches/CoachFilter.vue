<template>
  <base-card>
    <div class="p-3">
      <h2>Find Your Coach</h2>
      <div class="d-flex justify-content-start align-items-center">
        <div class="me-2">
          <input class="me-1" value="frontend" type="checkbox" id="frontend" v-model="areas" checked @change="setFilter" />
          <label for="frontend">Frontend</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="backend" type="checkbox" id="backend" v-model="areas" checked @change="setFilter" />
          <label for="backend">Backend</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="career" type="checkbox" id="career" v-model="areas" checked @change="setFilter" />
          <label for="career">Career</label>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "CoachFilter",
  emits: ["change-filter"],
  components: {},
  data() {
    return {
      areas: ["frontend", "backend", "career"],
    };
  },
  methods: {
    setFilter() {
      this.$emit("change-filter", this.areas);
    },
  },
};
</script>

<style></style>
