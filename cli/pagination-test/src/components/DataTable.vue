<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dt in data" :key="dt">
        <td>Data {{ dt + 1 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    data: {
      type: Array,
      required: false,
    },
    page: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style></style>
