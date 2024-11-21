// Name: LargestElement
// Task: Find the largest element in an array of integers.
// Constraints: Array length is between 1 and 10^5.
// Output Format: An integer representing the largest element.
// Sample Test Cases: in: [3, 5, 7, 2, 8]
// out: 8

function LargestElement(arr){
  //check if arr length is between 1 to 10^5, else return error message
  //if len===1, return 0th ele
  //set largest = first ele
  //iterate thru each ele in arr
    //if ith ele is larger than largest
      //replace ith ele as largest
  
  //return largest

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