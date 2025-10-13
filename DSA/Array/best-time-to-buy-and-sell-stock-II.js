// 121. Best Time to Buy and Sell Stock

function maximumProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log("maximumProfit: ", maximumProfit(prices));
