// Given an array arr[] of size N, find the smallest positive number missing from the array.

//  Example 1:
// Input:
// N = 5
// arr[] = {1,2,3,4,5}
// Output: 6
// Explanation: Smallest positive missing
// number is 6.
 

// Example 2:
// Input:
// N = 5
// arr[] = {0,-10,1,3,-20}
// Output: 2


function findMissing(arr, n) {
  //check if n is between 1 to 10^6, else return
  //check if arr ele is between -10^6 to 10^6, else return

  //if n===1 and ele > 0, check if the ele is positive
  //yes - return ele+1
  //no - return 1


  //filter elements >0 as positives
  //sort the array
  //if first ele >1 then 1 is missing ele

  //iterate thru positives
  //if curr+1 - curr >1 then missing ele is curr +1

  //if no ele is missing return max+1

  if (!(n >= 1 && n <= Math.pow(10, 6))) return;
  (n == 1 && arr[0] > 0) ? arr[0] + 1 : 1;

  const positives = arr.filter((ele) => {
    return ele > 0;
  })
  positives.sort((a, b) => a - b);
  if (positives[0] > 1) return 1;

  const posLen = positives.length;

  for (let i = 0; i < posLen; i++) {
    if (positives[i + 1] - positives[i] > 1)
      return positives[i] + 1;
  }

  return positives[posLen - 1] + 1;
}

let arr = [
  -47, 1, 4, 49, -18, 10, 26,
  18, -11, -38, -24, 36, 44, -11,
  45, 20, -16, 28, 17, -49, 47,
  -48, -33, 42, 2, 6,
  -49, 30, 36, -9, 15, 39, -6,
  -31, -10, -21, -19, -33, 47, 21,
  31, 25, -41, -23, 17, 6,
  47, 3, 36, 15, -44, 33, -31,
  -26, -22, 21, -18, -21, -47, -31,
  20, 18, -42, -35, -10, -1,
  46, -27, -32, -5, -4, 1, -29,
  5, 29, 38, 14, -22, -9, 0,
  43, -50, -16, 14, -26
];

let n = 85;
console.log(findMissing(arr, n))//7


arr = [1, 2, 3, 4, 5];
n = 5;
console.log(findMissing(arr, n))//6