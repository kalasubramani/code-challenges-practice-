// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeros(arr) {
  //use divide and conquer approach
  //if array.length =0, return "Invalid input"
  //check if array[0] == 0, then return countofzeros = array.length
  // loop till left <= right
    //take the array and divide into half
    //check if mid point has value ==0
        //set posofFirstZero to midpt
        //if there is another 0 before this index, update posofFirstZero to that index
      //take new right = midpt -1 and repeat the check
    //else new right = mid pt +1
 
    //if a zero is found, return arr.length - posFirstZero
    // else return 0

  //return countofzeros
  console.log("input", arr);
  if (!arr.length) return "Invalid input.";

  let midpt, posOfFirst0, left = 0, right = arr.length - 1, countOfZeros = 0;
  //check if arr contains all 0s
  if (arr[0] === 0) return arr.length;

  while (left <= right) {
    midpt = Math.floor((left + right) / 2);
    if (arr[midpt] === 0) {
      if (posOfFirst0 === undefined) posOfFirst0 = midpt;
      else posOfFirst0 = midpt < posOfFirst0 ? midpt : posOfFirst0;

      right = midpt - 1;
    }
    else {
      left = midpt + 1;
    }
  }
  if (posOfFirst0) countOfZeros = arr.length - posOfFirst0;
  return countOfZeros;
}

console.log(countZeros([1, 1, 1, 1, 0, 0]))// 2
console.log(countZeros([1, 0, 0, 0, 0]))// 4
console.log(countZeros([0, 0, 0])) // 3
console.log(countZeros([1, 1, 1, 1]))// 0
