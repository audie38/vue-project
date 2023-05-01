export default {
  listCategories(state) {
    return state.category;
  },
  listIncomeCategories(state) {
    return state.category.filter((ctg) => ctg.transactionType === "income");
  },
  listExpenseCategories(state) {
    return state.category.filter((ctg) => ctg.transactionType === "expense");
  },
};
