//given an array of nums, the function must 
//return the max. no. of digits a number has in the given array

function maxDigits(arr) {
  let maxLength = 0;
  arr.forEach(e => {
    let length = digitCount(e);
    maxLength = Math.max(length, maxLength);
  });
  return maxLength;
}

function digitCount(num) {
  return num.toString().length;
}

console.log(maxDigits([345, 456454, 234324324, 4565454]));