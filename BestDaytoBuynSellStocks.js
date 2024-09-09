/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  console.log("input "+prices);
  var lowestPrice=Math.min(...prices), dayOfLowestPrice=prices.indexOf(lowestPrice);
  // console.log("lowestPrice "+lowestPrice + " dayOfLowestPrice"+(dayOfLowestPrice+1));
  var highestPrice = 0;//Math.max(...prices);
  // console.log(" highestPrice "+highestPrice);

  for(var index=dayOfLowestPrice+1;index<prices.length;index++){
    //  console.log("compating "+prices[index] +" "+lowestPrice);

          if(prices[index]>lowestPrice && prices[index]>highestPrice){
            //  console.log(prices[index]);
                   highestPrice = prices[index];
                  dayOfHighestPrice =index+1;
                  //  console.log("highestPrice "+highestPrice+" dayOfhighestPrice "+dayOfHighestPrice);
               }
  }
  return (highestPrice-lowestPrice)>0? highestPrice-lowestPrice :0;
};

console.log(maxProfit( [7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 