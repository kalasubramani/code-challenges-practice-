// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// The minimum sum is  and the maximum sum is . The function prints
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format
// A single line of five space-separated integers.

// Constraints
// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5
// Sample Output
// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .


function minMaxSum(arr) {
  // Write your code here
  //check if arr.length != 5, else throw error
  //check if  arr[i] is between 1 and 10^9, else throw error
  
   //set minsum =0 , maxsum=0
  //find all subarrays of size 4
    //iterate thru arr, get ele that is not ith 
    // sum them all using arr.reduce
 
  //for each subarray, 
      //check if sum < minsum, then replace minsum
      //check if sum > maxsum, then replace maxSum
//print minsum and maxsum in same line

if(arr.length != 5) throw new Error("Invalid input");
let minSum=arr.reduce((acc,val,idx)=>{if(idx<4) acc=acc+parseInt(val);return acc;},0);
let maxSum=0;

for(let i=0;i<=arr.length-1;i++){
   if(!(arr[i]>=1 && arr[i]<=Math.pow(10,9))) throw new Error("Invalid input");
   let sum = arr.reduce((acc,val,idx)=>{         
        if(idx!=i) acc+=parseInt(val);
         return acc;
         },0)
        if(sum<minSum) minSum=sum;
        if(sum>maxSum) maxSum=sum;   
}  
  console.log(minSum,maxSum)    

}

minMaxSum([1,2,3,4,5])