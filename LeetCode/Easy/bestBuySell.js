// Best Time to Buy and Sell Stock
const bestBuySell = function (prices) {
  let minPrice = Number.MAX_VALUE; // Number.MAX_SAFE_INTEGER
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(bestBuySell(prices));
