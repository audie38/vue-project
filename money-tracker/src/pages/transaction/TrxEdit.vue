<template>
  <div></div>
</template>

<script>
export default {
  name: "TrxEdit",
  props: ["id"],
  created() {
    console.log("Prop id: ", this.id);
    console.log("Param id: ", this.$route.params.id);
  },
};
</script>
