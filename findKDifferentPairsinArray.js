// Given an array of integers nums and an integer k, 
// return the number of unique k-diff pairs in the array.
// A k-diff pair is an integer pair (nums[i], nums[j]), 
// where the following are true:

// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.

// Example 1:
// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.

// Example 2:
// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).

// Example 3:
// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
 
// Constraints:
// 1 <= nums.length <= 10^4
// -10^7 <= nums[i] <= 10^7
// 0 <= k <= 10^7


function findKDifferentPairsinArray(arr,k){
//check if input length in the range of 2 to 10000, else return "invalid input"
//check if elements of the array are in the range of -10000 to 10000,  else return "invalid input"
//check if k is in the range of 0 to 10^7

//use two pointer method
//use result object to store results
//in a loop, set i=0,j=i+1
  //make multiple pairs of elements
  //check if difference bw the ele ==k
    //yes - add the pair to result
//return result

if (!(arr.length>=2 && arr.length<=10000)) return "Invalid input";
if (!(k>=0 &&k<= Math.pow(10,7))) return "Invalid input";

let left =0, right = arr.length-1,tempArr=[],result=[];
while(left<=right && left<arr.length-1 && right<=arr.length-1){   
  if(left===right){
    left++;
    right=arr.length-1;
    } else{
      
        if (Math.abs(arr[left]-arr[right])===parseInt(k) ){          
            tempArr.push([arr[left],arr[right]]);         
        }
        right--;
    }
  
}

result = checkForDuplicates(tempArr);
return result.length;
}

function checkForDuplicates(arr){
  //iterate through elements of the array
  //get i =0, j=i+1
  //sort both arrays
  //stringify both arrays
  //compare both arrays
    //if equal, delete jth element from array
  //return resulting array
  let left=0,right=left+1;
  while(left<right && right<arr.length){
   
    const sortedLeft = [...arr[left]].sort();
    const sortedRight= [...arr[right]].sort();
    let areEqual = JSON.stringify(sortedLeft)===JSON.stringify(sortedRight);
    if(areEqual)
      arr.splice(right,1);

    if(right===arr.length-1){
      left++;
      right=left+1;
      }else  right++;
  }
  return arr;
}


console.log("findKDifferentPairsinArray --",findKDifferentPairsinArray([3,1,4,1,5],2));//2
console.log("findKDifferentPairsinArray --",findKDifferentPairsinArray([1,2,3,4,5],1));//4
console.log("findKDifferentPairsinArray --",findKDifferentPairsinArray([1,3,1,5,4],0));//1