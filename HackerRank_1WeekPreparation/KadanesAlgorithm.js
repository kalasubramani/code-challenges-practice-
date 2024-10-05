// Kadane's Algorithm falls under the category of Dynamic Programming.
//  It's like solving a complex puzzle by breaking it down into smaller pieces:

// Solve a Subproblem: Work on a small part of the problem.
// Save the Solution: Keep the solution of that part in memory.
// Reuse the Solution: If the same subproblem occurs, use the saved solution 
// instead of solving it again.
// This approach ensures efficiency and speed, as it avoids redundant computations

// Kadane's Algorithm is a shining example of how focusing on local, incremental solutions can lead to a global understanding. By solving small parts of the problem and building upon them, it offers an efficient and mathematically elegant approach.
// Kadene's Algorithm is an optimal approach with time complexity O(n)

//find the max sum of a contiguous subarray
//works only for 1D arrays 
function KadanesAlgorithm(arr){
  // Initialize Two Variables: One for the current sum (currentSum) and another for the maximum sum found so far (maxSum).
  // Iterate Through the Array: For each element, calculate the currentSum by adding the element to the previous currentSum. If the currentSum becomes negative, reset it to zero.
  // Update maxSum: If the currentSum is greater than maxSum, update maxSum.
  // Result: The value in maxSum is the maximum sum of a contiguous subarray.
 
  let maxSoFar=arr[0], MaxEndingHere=arr[0];
  console.log(MaxEndingHere,maxSoFar);

  for(let i=1;i<arr.length;i++){
    console.log("ele",arr[i],MaxEndingHere + arr[i])
    MaxEndingHere =  Math.max(arr[i], MaxEndingHere + arr[i]);
    // MaxEndingHere += arr[i];
    maxSoFar = Math.max(maxSoFar,MaxEndingHere)
    console.log(MaxEndingHere,"max",maxSoFar);
  }
  return maxSoFar;

  // let maxSoFar = -Infinity;
  //   let maxEndingHere = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //       maxEndingHere = maxEndingHere + arr[i];
  //       if (maxSoFar < maxEndingHere) {
  //           maxSoFar = maxEndingHere;
  //       }
  //       if (maxEndingHere < 0) {
  //           maxEndingHere = 0;
  //       }
  //   }
  //   return maxSoFar;

}

console.log(KadanesAlgorithm( [-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6