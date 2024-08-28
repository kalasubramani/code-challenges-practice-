// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeros(arr){
 //use divide and conquer approach
 //take the array and divide into half
 //check if mid point has value ==0
 //if yes, take left half of the array and repeat the check
 //if no, then move to right half
  //new left = mid pt +1, right = end
  //repeat the check
 // if the values are different and they are in consecutive positions, 
  //then get the index of zero
  // countofZeros = length - index of zero
 //return countofzeros
}

countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0