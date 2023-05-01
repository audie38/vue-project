<template>
  <base-card>
    <div class="row">
      <div v-for="wallet in WalletData" :key="wallet.id" class="col-xl-3 col-md-4 col-sm-6 my-2">
        <WalletItem :wallet="wallet" />
      </div>
    </div>
  </base-card>
</template>

<script>
import WalletItem from "./WalletItem.vue";

export default {
  name: "WalletList",
  components: {
    WalletItem,
  },
  computed: {
    WalletData() {
      return this.$store.getters["wallet/ListWallet"];
    },
  },
};
</script>
