
function maxSumOfSubArray(arr,k){
  let maxSum=0;sum=0,x=0;

  //get sum of first k elements
  //loop thru arr, add K+1 th ele and subtract the 0 th ele of sub array
  //if sum > maxSum, replace maxSum
  //return maxSum

  while(x<k){
    sum += arr[x];
    x++;
  }

  for(let i=k;i<arr.length;i++){
    sum = (sum - arr[i-k]) + arr[i];
    maxSum = Math.max(sum,maxSum);
  }

  return maxSum;
}

console.log(maxSumOfSubArray([-2,-3,0,4,5,2,4,3,2,-2,4],3));
console.log(maxSumOfSubArray([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSumOfSubArray([3,-2,7,-4,1,-1,4,-2,1],2));