<template>
  <base-card>
    <div class="d-flex flex-column justify-content-start">
      <div class="d-flex justify-content-around">
        <h3 class="me-auto">Inflow</h3>
        <h3 class="ms-auto text-primary">{{ formatCurrency(inflow) }}</h3>
      </div>

      <div class="d-flex justify-content-around">
        <h3 class="me-auto">Outflow</h3>
        <h3 class="ms-auto text-danger">{{ formatCurrency(outflow) }}</h3>
      </div>
      <hr class="w-50 ms-auto" />
      <div class="ms-auto">
        <h3 :class="cashFlowDif">{{ formatCurrency(inflow - outflow) }}</h3>
      </div>
    </div>
  </base-card>
</template>

<script>
import formatMixin from "@/mixins/format.js";

export default {
  name: "TrxSummary",
  mixins: [formatMixin],
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
