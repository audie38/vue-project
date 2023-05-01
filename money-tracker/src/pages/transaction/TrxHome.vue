<template>
  <TrxSummary />
  <div class="d-flex">
    <router-link :to="{ name: 'trxDetail' }" class="btn btn-dark ms-auto">Add New Transaction</router-link>
  </div>
  <base-card v-for="td in listOfTrxDt" :key="td">
    <div class="d-flex justify-content-around">
      <h3 class="me-auto">{{ td }}</h3>
      <h3 :class="trxColorClass(totalTrx(td))">{{ formatCurrency(totalTrx(td)) }}</h3>
    </div>
    <hr class="w-100" />
    <TrxItem v-for="trx in listOfTrx(td)" :key="trx.id" :transaction="trx" />
  </base-card>
</template>

<script>
import formatMixin from "@/mixins/format.js";

import TrxSummary from "@/components/transaction/TrxSummary.vue";
import TrxItem from "@/components/transaction/TrxItem.vue";

export default {
  name: "TrxHome",
  mixins: [formatMixin],
  components: {
    TrxSummary,
    TrxItem,
  },
  methods: {
    listOfTrx(trxDt) {
      return this.$store.getters["trx/listTransactions"].filter((trx) => trx.transactionDate == trxDt);
    },
    totalTrx(trxDt) {
      const trx = this.$store.getters["trx/listTransactions"].filter((trx) => trx.transactionDate == trxDt);
      let total = 0;
      for (let i = 0; i < trx.length; i++) {
        if (trx[i].transactionType === "income") {
          total += trx[i].transactionAmount;
        } else {
          total -= trx[i].transactionAmount;
        }
      }
      return total;
    },
    trxColorClass(amount) {
      if (Number(amount) <= 0) {
        return "ms-auto text-danger";
      } else {
        return "ms-auto text-primary";
      }
    },
  },
  computed: {
    listOfTrxDt() {
      return this.$store.getters["trx/listOfTransactionDate"];
    },
  },
};
</script>
