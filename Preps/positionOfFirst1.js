// Given a sorted array, arr[] containing only 0s and 1s, 
// find the transition point, i.e., the first index where 1 was observed, 
// and before that, only 0 was observed.  If arr does not have any 1, 
// return -1. If array does not have any 0, return 0.

// Examples:
// Input: arr[] = [0, 0, 0, 1, 1]
// Output: 3
// Explanation: index 3 is the transition point where 1 begins.
// Input: arr[] = [0, 0, 0, 0]
// Output: -1
// Explanation: Since, there is no "1", the answer is -1.
// Input: arr[] = [1, 1, 1]
// Output: 0
// Explanation: There are no 0s in the array, so the transition point is 0, indicating that the first index (which contains 1) is also the first position of the array.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 1

function positionOfFirst1(arr) {
  // code here
  //check if arr size is between 1 to 10^5, else return
  //check if arr ele are 0 or 1, else return
  
  //check if first ele is 1, return 0
  //use binary search to find 1
  //set start =0, end = len-1;
  //while start <end
      //find midpoint = (start+end)/2
      // if(mid===1)  
          //check if prev ele is 0
              //yes = return mid
              //no -  end = mid-1
      //else if mid ===0 
          //check if next ele is 1
             //yes - return mid+1
             //no -    start = mid +1
  //return -1;
  
  const length = arr.length;
  if(!(length>=1 && length<=Math.pow(10,5))) return;
  if(arr[0]===1) return 0;
  
  let start=0, end = length-1;
  while(start<end){
      let mid = Math.floor((start+end)/2);
      let ele = arr[mid];
      
      if(ele>1) return;
      
      if(ele ===1){
          if(arr[mid-1]===0) return mid;
          else end = mid-1;
      }else if(ele===0){
          if(arr[mid+1]===1) return mid+1;
          else start = mid+1;
      }
  }
  return -1;
}

console.log(positionOfFirst1([0, 0, 0, 1, 1]))//3
console.log(positionOfFirst1([0, 0, 0, 0]))//-1
console.log(positionOfFirst1( [1, 1, 1]))//0