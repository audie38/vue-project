<template>
  <div>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#addContactModal">Add Contact</button>

    <div class="modal fade" id="addContactModal" tabindex="-1" aria-labelledby="addContactLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addContactLabel">Add Contact</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitData">
              <div class="mb-3">
                <label for="friendName" class="form-label">Name</label>
                <input type="text" class="form-control" id="friendName" v-model="enteredName" />
              </div>
              <div class="mb-3">
                <label for="friendPhone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="friendPhone" v-model="enteredPhone" />
              </div>
              <div class="mb-3">
                <label for="friendEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="friendEmail" v-model="enteredEmail" />
              </div>
              <div class="mb-3 d-flex justify-content-end">
                <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      if (this.enteredName !== "" && this.enteredPhone !== "" && this.enteredEmail !== "") {
        let contactData = {
          name: this.enteredName,
          phone: this.enteredPhone,
          email: this.enteredEmail,
        };
        this.$emit("add-contact", contactData);
        this.enteredName = "";
        this.enteredPhone = "";
        this.enteredEmail = "";
      }
    },
  },
};
</script>

<style></style>
