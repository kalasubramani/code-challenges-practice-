// Name: LargestElement
// Task: Find the largest element in an array of integers.
// Constraints: Array length is between 1 and 10^5.
// Output Format: An integer representing the largest element.
// Sample Test Cases: in: [3, 5, 7, 2, 8]
// out: 8

//bonus challenge
// Find the largest element in an array of integers, but you must do so in O(log n) time.

function LargestElement(arr){
  //check if arr length is between 1 to 10^5, else return error message
  //if len===1, return 0th ele
  //set largest = first ele
  //iterate thru each ele in arr
    //if ith ele is larger than largest
      //replace ith ele as largest
  
  //return largest
  //Big O: o(n)

 let n = arr.length;
 if(!(n>=1 && n<=Math.pow(10,5))) return ("Array length out of bounds");
 if(n===1) return arr[0];

 let largest = arr[0];
 for(let i=0;i<n;i++){
  if(arr[i]>largest) largest =arr[i];
 }

return largest;
}

console.log(LargestElement([3, 5, 7, 2, 8]));//8

function LargestEle_SortedArr(arr){
  //check if array length is between 1 to 10^5, else return error
  //if arr len ==1, return arr[0]
  //the array may be sorted asc or desc - the largest ele can be at 0 or n-1
  // so find max(arr[0],arr[n-1])
  //return max

  //Big O: o(1)

  let n=arr.length;
  if(!(n>=1 && n <=Math.pow(10,5))) return ("Input length out of bounds");
  if(n===1) return arr[0];

  return Math.max(arr[0],arr[n-1]);

}

console.log(LargestEle_SortedArr([2,3, 5, 7, 8]))//8

function LargestEle_MountainArr(arr){
  //a mountain array has ele that first increases and then decreases or the reverse of it
  //for sorted arrays like this, binary search can be used to find the largest ele
  //check if arr length is between 1 to 10^5, else return error
  //if arr len ==1, return arr[0]
  //find midpoint = (start+end)/2
  //set largest =midpoint
  //set start =0, end = n-1
  //iterate until start <=end
      // find midpoint
      //if midpoint >previous && midpoint >next, replace largest
      //if midpoint < next, set start = mid +1
      //if midpoint >next, set end = midpoint-1
 
  //Big(o) - O(log n)

  let n= arr.length;
  if(!(n>=1 && n<=Math.pow(10,5))) return "Input out of bounds";
  if(n===1) return arr[0];

  let start=0, end =n-1;
  while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return arr[mid];
    else if (arr[mid]<arr[mid+1]) start = mid+1;
    else end = mid -1;
  }
}

console.log(LargestEle_MountainArr([1, 30, 40, 50, 60, 70, 23, 20]));//70
console.log(LargestEle_MountainArr([1, 30, 40, 50, 60, 70,75, 23, 20]));//75
console.log(LargestEle_MountainArr([1, 30, 40, 50, 60, 70, 75,80,23, 20]));//80

LargestEle_unsortedArr(arr){}