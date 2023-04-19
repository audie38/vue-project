<template>
  <div class="my-3">
    <div v-if="isInvalid">
      <div class="modal position-fixed d-block my-5" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Invalid Input</h5>
            </div>
            <div class="modal-body">
              <p>Unfortunately, at least one input value is invalid.</p>
              <p>Please check all inputs and make sure you enter at least a few characters into each input field</p>
            </div>
            <div class="modal-footer">
              <button @click="isInvalid = false" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardContainer>
      <form @submit.prevent="pushNewResource">
        <div class="mb-3">
          <label for="resourceTitle" class="form-label fw-bold">Title</label>
          <input type="text" class="form-control" id="resourceTitle" v-model="title" />
        </div>
        <div class="mb-3">
          <label for="resourceDesc" class="form-label fw-bold">Description</label>
          <textarea class="form-control" id="resourceDesc" style="height: 100px" v-model="desc" />
        </div>
        <div class="mb-3">
          <label for="resourceLink" class="form-label fw-bold">Link</label>
          <input type="text" class="form-control" id="resourceLink" v-model="link" />
        </div>
        <button type="submit" class="btn btn-danger">Add Resource</button>
      </form>
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from "../ui/CardContainer.vue";

export default {
  name: "NewResource",
  components: {
    CardContainer,
  },
  data() {
    return {
      isInvalid: false,
      launchModalTarget: "modal",
      title: "",
      desc: "",
      link: "",
      slug: "",
    };
  },
  methods: {
    pushNewResource() {
      const newResourceItem = {
        title: this.title,
        desc: this.desc,
        link: this.link,
        slug: this.title.replace(" ", "-"),
      };

      if (this.title == "" || this.desc == "" || this.link == "") {
        this.isInvalid = true;
      } else {
        this.$emit("push-resource", newResourceItem);
        this.title = "";
        this.desc = "";
        this.link = "";
        this.slug = "";
      }
    },
  },
  computed() {},
};
</script>

<style></style>
