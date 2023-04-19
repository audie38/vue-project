<template>
  <CardContainer>
    <h2 class="fw-bold text-center">{{ teamName }}</h2>
    <UserItem class="bigOnHover" v-for="user in members" :key="user.id" :user="user" />
  </CardContainer>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";
import UserItem from "../users/UserItem.vue";

export default {
  name: "TeamMembers",
  inject: ["users", "teams"],
  props: ["id"],
  components: {
    CardContainer,
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembersById(id) {
      const teamId = id;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    this.loadTeamMembersById(this.id);
  },
  watch: {
    id(newId) {
      this.loadTeamMembersById(newId);
    },
  },
};
</script>

<style></style>
