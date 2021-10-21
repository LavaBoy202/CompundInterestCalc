function reinvestedDividends(balance, divYield) {
  return balance * divYield;
}
function porfolioGrowth(balance, growth) {
  return balance * growth;
}
function deposits(balance, monthlyDeposits) {
  let total = balance + monthlyDeposits;
  return total;
}
