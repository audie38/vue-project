<template>
  <base-card>
    <router-link :to="editTrxLink" class="d-flex justify-content-around align-items-center nav-link">
      <span class="me-auto">{{ transactionDesc(transaction.categoryId) }}</span>
      <span :class="transactionColor(transaction.transactionType)">{{ formatCurrency(transaction.transactionAmount) }}</span>
    </router-link>
  </base-card>
</template>

<script>
import formatMixin from "@/mixins/format.js";

export default {
  name: "TrxItem",
  mixins: [formatMixin],
  props: {
    transaction: {
      type: Object,
      required: false,
      default() {
        return {
          transactionType: "",
          transactionAmount: 0,
          transactionNotes: "",
          transactionDate: "",
        };
      },
    },
  },
  methods: {
    transactionDesc(trx) {
      return this.$store.getters["category/listCategories"].filter((ctg) => ctg.id == trx)[0].categoryCode;
    },
    transactionColor(trx) {
      if (trx === "income") {
        return "ms-auto text-primary";
      } else {
        return "ms-auto text-danger";
      }
    },
  },
  computed: {
    editTrxLink() {
      return `/trx/${this.transaction.id}`;
    },
  },
  created() {},
};
</script>
