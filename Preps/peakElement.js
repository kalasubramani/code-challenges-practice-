// Given an 0-indexed array of integers arr[], find its peak 
// element and return its index. An element is considered to be 
// peak if its value is greater than or equal to the values of 
// its adjacent elements (if they exist).

// Note: The output will be "true" if the index returned by your 
// function is correct; otherwise, it will be "false".

// Examples :
// Input: arr = [1, 2, 3]
// Output: true
// Explanation: If the index returned is 2, then the output printed 
// will be 1. Since arr[2] = 3 is greater than its adjacent elements, 
// and there is no element after it, we can consider it as a peak element. 
// No other index satisfies the same property, so answer will be printed as 0.
// Input: arr = [1, 1, 1, 2, 1, 1, 1]
// Output: true
// Explanation: In this case there are 5 peak elements with indices as {0,1,3,5,6}. 
// Returning any of them will give you correct answer.
// Input: arr = [1, 1, 1]
// Output: true
// Explanation: In this case, all elements are peak elements.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106

function peakElement(arr) {
  // Code here
  //check if arr size is between 1 to 10^6, else return
  //check if ele are between 0 to 10^6,else return
  
  //if len ===1, return 0
  //loop thru each ele
      //for first ele, if ele >=next, return idx
      //for last ele, if ele >=prev, return idx
      //if ele >= prev && ele >= next 
          //yes - return idx
          
  // return -1
  
  const len=arr.length;
        if(!(len>=1 && len<=Math.pow(10,6))) return
        if(len===1) return 0;
       
        for(let i=0;i<len;i++){
            if(!(arr[i]>=0 && arr[i]<=Math.pow(10,6))) return;
            
            if(i===0 && arr[i]>=arr[i+1]) return i;
            else if(i===(len-1) && arr[i]>=arr[i-1] )  return i;
            else if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1])  return i;
        }
        return -1;
}
console.log(peakElement([1, 1, 1, 2, 1, 1, 1]));//0 or 1 or 3 or 5 or 6
console.log(peakElement([1, 2, 3]));//2
console.log(peakElement([2]));//0