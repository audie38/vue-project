<template>
  <CardContainer class="biggerOnHover">
    <h3 class="fw-bold">{{ team.name }}</h3>
    <p>{{ team.members.length }} Members</p>
    <button @click="moveToOtherPage(team.id)" class="btn btn-dark w-25">View Members</button>
  </CardContainer>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";

export default {
  name: "TeamItem",
  props: {
    team: {
      type: Object,
      required: false,
      default() {
        return {
          name: "",
          members: [],
        };
      },
    },
  },
  components: {
    CardContainer,
  },
  data() {
    return {};
  },
  methods: {
    moveToOtherPage(id) {
      this.$router.push(`/teams/${id}`);
    },
  },
};
</script>

<style></style>
