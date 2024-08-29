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
  //take the array and divide into half
  //check if mid point has value ==0
  // if the values in prev position (mid pt-1) is 1, 
  //then get the index of first zero after 1
  // countofZeros = length - index of zero
  //if yes, take left half of the array and repeat the check
  //new right = mid pt -1, left = start pos
  //if no, then move to right half
  //new left = mid pt +1, right = end
  //repeat the check

  //return countofzeros

  if (!arr.length) return "Invalid input.";
  //check if arr contains all 0s
  if (arr[0] === 0) return arr.length;

  let midpt = Math.floor(arr.length / 2), posOfLast1, left = 0, right = arr.length - 1;
  // console.log("midpt",midpt,"posOfLast1",posOfLast1);
  while (left < right) {
    if (arr[midpt] === 0) {
       arr[midpt-1] ===1 ? posOfLast1 = midpt-1 :  right = midpt - 1;
    } else {
      arr[midpt+1] ===0 ? posOfLast1=midpt : left = midpt + 1;
    }
    // console.log("aa",posOfLast1);
    if(posOfLast1) break;
  }

 console.log("result",arr.length -(posOfLast1+1)) ;

}

countZeros([1, 1, 1, 1, 0, 0]) // 2
countZeros([1,0,0,0,0]) // 4
countZeros([0,0,0]) // 3
countZeros([1,1,1,1]) // 0