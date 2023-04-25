<template>
  <base-card>
    <h3>Find Your Coach</h3>
    <div class="d-flex flex-row justify-content-start align-items-start">
      <div>
        <input type="checkbox" name="frontend" id="frontend" value="frontend" checked v-model="expertise" @change="setFilter" />
        <label class="mx-2 text-capitalize" for="frontend">frontend</label>
      </div>
      <div>
        <input type="checkbox" name="backend" id="backend" value="backend" checked v-model="expertise" @change="setFilter" />
        <label class="mx-2 text-capitalize" for="backend">backend</label>
      </div>
      <div>
        <input type="checkbox" name="career" id="career" value="career" checked v-model="expertise" @change="setFilter" />
        <label class="mx-2 text-capitalize" for="career">career</label>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "CoachFilter",
  emits: ["coach-filter"],
  data() {
    return {
      expertise: ["frontend", "backend", "career"],
    };
  },
  methods: {
    setFilter() {
      this.$emit("coach-filter", this.expertise);
    },
  },
  computed: {},
};
</script>

<style></style>
