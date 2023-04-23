<template>
  <base-card>
    <div class="p-3">
      <h2>Find Your Coach</h2>
      <div class="d-flex justify-content-start align-items-center">
        <div class="me-2">
          <input class="me-1" value="frontend" type="checkbox" id="frontend" checked v-model="checkedAreas" @change="setFilter" />
          <label for="frontend">Frontend</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="backend" type="checkbox" id="backend" checked v-model="checkedAreas" @change="setFilter" />
          <label for="backend">Backend</label>
        </div>
        <div class="me-2">
          <input class="me-1" value="career" type="checkbox" id="career" checked v-model="checkedAreas" @change="setFilter" />
          <label for="career">Career</label>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "CoachFilter",
  components: {},
  data() {
    return {
      checkedAreas: ["frontend", "backend", "career"],
    };
  },
  methods: {
    setFilter() {
      this.$emit("change-filter", this.checkedAreas);
    },
  },
};
</script>

<style></style>
