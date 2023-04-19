<template>
  <div>
    <UserItem class="biggerOnHover" v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  name: "UserList",
  components: {
    UserItem,
  },
  inject: ["users"],
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("Leave Page ?")) {
      console.log(to, from);
      next();
    }

    next(false);
  },
};
</script>

<style></style>
