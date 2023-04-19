<template>
  <div>
    <div class="bg-danger text-light d-flex justify-content-center align-items-center py-3 fs-2">Friend List</div>
    <div class="container my-5">
      <div class="d-flex justify-content-end my-5 ms-auto">
        <NewFriend @add-contact="addContact" />
      </div>
      <FriendContact @toggle-favorite="toggleFavorite(friend.id)" @delete-contact="deleteContact(friend.id)" v-for="friend in friends" :key="friend.id" :contact="friend" />
    </div>
  </div>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  name: "App",
  components: {
    FriendContact,
    NewFriend,
  },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "01234 56789",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "9876 54321",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(contact) {
      const newContact = {
        id: +new Date(),
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        isFavorite: false,
      };
      this.friends.push(newContact);
    },
    deleteContact(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style></style>
