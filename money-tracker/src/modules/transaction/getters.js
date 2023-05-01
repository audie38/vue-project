export default {
  listTransactions(state) {
    return state.transaction;
  },
  listOfIncome(state) {
    const trx = state.transaction.filter((tr) => tr.transactionType === "income");
    let total = 0;
    for (let i = 0; i < trx.length; i++) {
      total += trx[i].transactionAmount;
    }
    return total;
  },
  listOfOutcome(state) {
    const trx = state.transaction.filter((tr) => tr.transactionType === "expense");
    let total = 0;
    for (let i = 0; i < trx.length; i++) {
      total += trx[i].transactionAmount;
    }
    return total;
  },
  listOfTransactionDate(state) {
    return [...new Set(state.transaction.map((trx) => trx.transactionDate))].sort().reverse();
  },
};
