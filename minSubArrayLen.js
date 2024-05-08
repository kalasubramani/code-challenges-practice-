
// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters 
//  - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.

function minSubArrayLen(arr,k){
  //set minLength=0;
  //find sum of first two ele, check if sum >=k
  //if sum === k, 
      //find length of subarray
      //check if subArray len > minLength, store it in minLen
  //if sum < k, add n+1 th ele and check sum >= k
  //return minLength

  let minLength, sum =0,subArr=[],subArrLen=2;
  if(!arr){
    return 0;
  }

  subArr.push(arr[0]);
  subArr.push(arr[1]);
  sum = arr[0]+arr[1];
  if(sum>=k){
    minLength=subArr.length;
  }


for(let i=2;i<arr.length;i++){  
  sum = (sum - arr[i-subArrLen]) + arr[i];
  subArr.shift();
  subArr.push(arr[i]);
  if(sum >= k){   
    console.log("subArr ",subArr);
    if(!minLength){
      minLength = subArr.length;
    }else{
      minLength = subArr.length<minLength?subArr.length:minLength;     
    }
  }
    
}//for

return minLength>0?minLength:0;
}

console.log(minSubArrayLen([2,3,1,2,4,3,6,1], 7));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));