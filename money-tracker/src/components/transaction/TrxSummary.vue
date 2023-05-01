<template>
  <base-card>
    <div class="d-flex flex-column justify-content-start">
      <div class="d-flex justify-content-around">
        <h3 class="me-autp">Inflow</h3>
        <h3 class="ms-auto text-primary">Rp {{ inflow }}</h3>
      </div>

      <div class="d-flex justify-content-around">
        <h3 class="me-autp">Outflow</h3>
        <h3 class="ms-auto text-danger">Rp {{ outflow }}</h3>
      </div>
      <hr class="w-50 ms-auto" />
      <div class="ms-auto">
        <h3 :class="cashFlowDif">Rp {{ inflow - outflow }}</h3>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: "TrxSummary",
  data() {
    return {};
  },
  computed: {
    cashFlowDif() {
      if (this.inflow > this.outflow) {
        return "me-3 text-primary";
      } else if (this.inflow == this.outflow) {
        return "me-3 text-secondary";
      } else {
        return "me-3 text-danger";
      }
    },
    inflow() {
      return this.$store.getters["trx/listOfIncome"];
    },
    outflow() {
      return this.$store.getters["trx/listOfOutcome"];
    },
  },
};
</script>
