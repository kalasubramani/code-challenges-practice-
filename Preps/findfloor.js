// Given a sorted array arr[] (with unique elements) 
// and an integer k, find the index (0-based) of the 
// largest element in arr[] that is less than or equal 
// to k. This element is called the "floor" of k. If such 
// an element does not exist, return -1.

// Examples
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 0
// Output: -1
// Explanation: No element less than 0 is found. So output is -1.
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 5
// Output: 1
// Explanation: Largest Number less than 5 is 2 , whose index is 1.
// Input: arr[] = [1, 2, 8], k = 1
// Output: 0
// Explanation: Largest Number less than or equal to  1 is 1 , 
// whose index is 0.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106
// 0 ≤ k ≤ arr[n-1]

function findFloor(arr, k) {
  // your code here
  //check if arr size is between 1 to 10^6, else return
  //check if arr ele is between 1 to 10^6, else return
  //check if K is between 0 to last ele of arr, else return
  
  //use binary search
  //start =0, end = arr length
  // while start<end
      //find mid = (start+end)/2
      //if mid <= k 
          //check if next ele >k, return idx
      // if mid >k
          //move end to mid-1
      //if mid <k
          //move start to mid+1
          
  // return -1
  

  
  let res={},max=-1;
 let temp= arr.filter((val,idx)=>{
     if(val<=k){
          res[val] = idx;
          if(!max) max = val;
          else if(val>max) max=val;
     }
 })
  console.log(temp,res,max,res[max])
 
 return res[max]??-1;
}

console.log(findFloor([10143, 29122, 30010],23112))