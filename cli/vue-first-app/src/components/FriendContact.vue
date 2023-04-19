<template>
  <div class="card shadow-sm d-flex justify-content-center align-items-center my-3 py-3 px-3">
    <div class="row d-flex justify-content-center align-items-center w-100">
      <h3 class="text-danger text-center fw-bold customPointer">{{ contact.name }} {{ contact.isFavorite ? "✦" : "" }}</h3>
      <hr class="w-100" />
      <button @click="toggleFavorite" class="btn btn-danger mx-2 text-light w-25">{{ isFavoritos ? "Remove From " : "Add to " }}Favorite</button>
      <button @click="toggleDetails" class="btn btn-danger mx-2 text-light w-25">{{ isShowDetails ? "Hide" : "Show" }} Details</button>
      <button @click="$emit('delete-contact')" class="btn btn-danger mx-2 text-light w-25">Delete</button>
      <div class="my-3" v-if="isShowDetails">
        <div class="card shadow-sm d-flex justify-content-center align-items-center pt-2 mb-3">
          <p class="text-dark">
            <span class="fw-bold">Phone Number: </span>
            {{ contact.phone }}
          </p>
        </div>
        <div class="card shadow-sm d-flex justify-content-center align-items-center pt-2 mb-3">
          <p class="text-dark">
            <span class="fw-bold">Email: </span>
            {{ contact.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendContact",
  props: {
    contact: {
      type: Object,
      required: false,
      default() {
        return { id: 0, name: "", phone: "", email: "" };
      },
    },
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing");
        return false;
      }
    },
    "delete-contact": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing");
        return false;
      }
    },
  },
  data() {
    return {
      isShowDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isShowDetails = !this.isShowDetails;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.contact.id);
    },
  },
};
</script>

<style>
.customPointer {
  cursor: pointer;
}
</style>
