// let prices = [7,1,5,3,6,4];
let prices = [7,6,4,3,1];

const getProfit = (prices) => {
  let profit = 0;
  for(let i=0; i<prices.length; i++){
    for(let j=i+1; j<prices.length; j++){
      if(prices[j]-prices[i] > profit){
        profit = prices[j]-prices[i];
      };
    }
  }
  return profit;
};

console.log(getProfit(prices));
// time complexity - O(n^2) and space complexity - O(1)
