
// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters 
//  - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.
// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr,k){
  //set minLength=0, i-0,j=0;
  //find sum of first n ele, check if sum >=k
  //until j and i < arr.length 
    //if sum <k
        //add next ele
        // move j to next pos
  //else if sum >= k, 
      //find length of subarray
      //check if subArray len > minLength? replace minLen  
      //remove first ele
      //subract first ele from sum
      //move i to next pos  
  //return minLength

  let minLength,i=0,j=0,sum =0,subArr=[],subArrLen=2;
  if(!arr){
    return 0;
  }
  while(i<arr.length && j<arr.length){  
  if(sum<k){
    sum = sum + arr[j];
    subArr.push(arr[j]);
    j++;//move j to next pos   
  }else if(sum >= k){      
    minLength = minLength ? Math.min(subArr.length,minLength) : subArr.length;
     sum -=subArr.shift(); //remove first ele
     i++;//move first pointer
  }    
  console.log("subArr ",subArr);
}//while

return minLength>0?minLength:0;
}


// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }
console.log(minSubArrayLen([2,3,1,2,4,3,6,1], 7));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));