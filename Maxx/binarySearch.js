
// Name: BinarySearch
// Task: Implement binary search to find the index of a target element in a sorted array.
// Constraints: Array length is between 1 and 10^5.
// Output Format: An integer representing the index, or -1 if not found.
// Sample Test Cases: in: [1, 2, 3, 4, 5], 3
// out: 2

// bonus challenge:
// Implement binary search to find the index of a target element in a sorted array.
// in: [4, 5, 6, 7, 1, 2, 3], 3
// out: 

function BinarySearch(){
  //if arr len ==1, return arr[0]
  //find midpoint = (start+end)/2
  //set largest =midpoint
  //set start =0, end = n-1
  //iterate until start <=end
      // find midpoint
      //if midpoint >previous && midpoint >next, replace largest
      //if midpoint < next, set start = mid +1
      //if midpoint >next, set end = midpoint-1

      let n= arr.length;
      if(!n) return "Input length is zero";
      if(n===1) return arr[0];
    
      let start=0, end =n-1;
      while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return arr[mid];
        else if (arr[mid]<arr[mid+1]) start = mid+1;
        else end = mid -1;
      }
}