// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
// Return the array after sorting it.
// Example 1:
// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// Example 2:
// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

// Constraints:
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 104

function SortIntegersByNumberof1Bits(arr) {
  // if arr length in <1 or >500 return "invalid input"
  //if any element in n array is outside the bounds of 1 to 104, return "invalid input"

  //loop thru each element in the arr
  //check if ele falls in the range, else return "invlaid input"
  //get the binary representation of the integer
  //get the no.of 1's in the binary result
  //store the integer and no.of 1's count in an obj

  // loop thru every ele in the obj
  //initalize a counter=0
  //look for ele that has 0 as bit count
  //push the integer to results array
  //inc the counter

  //return result arr

  //edge cases
  if (arr.length < 1 || arr.length > 500) return "Invlaid input";

  let bitsCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] >= 0 && arr[i] <= 10000)) return "Invalid input";
    //convert decimal to binary
    let bin = (arr[i] >>> 0).toString(2);   
    let countOf1s = count1Bits(bin);
   
    bitsCount[arr[i]] = countOf1s;
  }
 return printResultOrderedBy1Count(bitsCount)
}

function count1Bits(n) {
  //for each digit of n
  //check if the obj has ele 1
  //if key[1] already exists, increment value by 1
  //else insert key[1] and set value to 1
  //return value of key[1]
  let freq = { 1: 0 };
  for (digit of n) {
    if (parseInt(digit) === 1) freq[1] = freq[1] + 1;
  }
  return freq[1];
}

function printResultOrderedBy1Count(bitsCount) {
  //sort the array
  //intialize counter =0
  //iterate as long as obj has elements ?? for??
  //if any key has value === counter
  //push key into results array
  //delete the key from obj

  let result = [], counter = 0;
 
  while (Object.keys(bitsCount).length) {
    let k = Object.entries(bitsCount).forEach(([key, value]) => {
      if (value === counter) {
        result.push(key)
        delete bitsCount[key]
      }
    })
    counter++;
  }
  return result;
  // console.log(result)
}

// console.log(count1Bits("10110110000"));

let arr = [10, 3, 5, 6, 2, 7, 9, 104];
arr=[1,2,3,4,5,6,7,8];
console.log(SortIntegersByNumberof1Bits(arr));