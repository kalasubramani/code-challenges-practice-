// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers 
// strictly to the left of the index is equal to the sum of all the 
// numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 
// because there are no elements to the left. This also applies to the right edge 
// of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
 
// Constraints:
// 1 <= nums.length <= 10^4
// -1000 <= nums[i] <= 1000

function findPivotIndexOfArray(arr){
  //check if input length is between 1 and 10^4, else return "Invalid input"
  //check if elements of array are between -1000 and 1000, else return "Invalid input"
  //use sliding window pattern
  //set leftsum =0,rightsum=0, pivotIdx=0;
  //loop- start from pivotindex until end of arr
  //right sum = sum of all elements right of pivotIdx(excluding pivot)
  //check if leftsum=rightsum
    //return pivotIdx
    //break
  //else
    //move pivotIdx by 1
    //left sum = sum of elements from 0 to pivotIdx (excluding pivot)
  //return -1 as no pivotIdx is found

//write a sub fn to calculate the sum of n array elements takes start and end index

if(!(arr.length>=1 && arr.length<=10000)) return "Invalid input";

let leftsum=0,rightSum=0,pivotIdx=0;
for(let i=pivotIdx;i<arr.length;i++,pivotIdx++){
  if(pivotIdx>0) leftsum=findSum(0,pivotIdx-1,arr);
  rightSum=findSum(pivotIdx+1,arr.length-1,arr);
  if(leftsum===rightSum){
    return pivotIdx;
  }  
}
return -1;
}

//finds the sum of array elements from start idx to end idx
function findSum(startIdx,endIdx,arr){
  let idx=startIdx,sum=0;
  while(idx<=endIdx){
     //check id arr[i] falls within the accepted range
     if(!(arr[idx]>=-1000 && arr[idx]<=1000)) return;
      sum +=arr[idx];
      idx++;
  }
  return sum;
}

// console.log(findSum(0,2,[2,1,-1]));
console.log(findPivotIndexOfArray([2,1,-1]));//0
console.log(findPivotIndexOfArray([1,2,3]));//-1
console.log(findPivotIndexOfArray([1,7,3,6,5,6]));//3