<template>
  <div class="card">
    <div class="card-body d-flex justify-content-center align-items-center">
      <h1 class="card-title">{{ walletName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletItem",
  props: {
    wallet: {
      type: Object,
      required: false,
      default() {
        return {
          userId: 1,
          walletId: 1,
          walletName: "",
          balance: 0,
          currency: "idr",
        };
      },
    },
  },
};
</script>
