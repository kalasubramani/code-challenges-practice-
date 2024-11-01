
// Given a sorted array arr[] of distinct integers. Sort the array 
// into a wave-like array(In Place). In other words, arrange the 
// elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....
// If there are multiple solutions, find the lexicographically smallest one.

// Note: The given array is sorted in ascending order, and you don't need to return anything to change the original array.

// Examples:
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [2, 1, 4, 3, 5]
// Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.

function waveArray(arr) {
  // your code here
  //check if arr size is in range of 1 to 10^6, else throw error
  //check is arr ele is in range of 0 to 10^7, else throw error
  //iterate thru the sorted array
      //swap i and i+1
      //inc i=i+2
  //return swapped array
  
  let length = arr.length;
  if(!(length>=1 && length < Math.pow(10,6))) throw new Error("Length out of bounds");
  
  for(let i=0;i<length-1;i+=2){
      [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
      // console.log(arr)
  }
  return arr;
}

console.log(waveArray([1, 2, 3, 4, 5]));//[2, 1, 4, 3, 5]
console.log(waveArray([2, 4, 7, 8, 9, 10]));//[4, 2, 8, 7, 10, 9]
console.log(waveArray([2]));  //[2]