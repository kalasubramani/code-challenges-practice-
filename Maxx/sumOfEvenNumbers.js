
// Name: SumOfEvenNumbers
// Task: Given an array of integers, write a function to return the sum of all even numbers in the array.
// Constraints: 1 <= array length <= 1000, -10^6 <= array elements <= 10^6
// Output Format: Return the sum of even numbers.
// Sample Test Cases: in: [1, 2, 3, 4, 5, 6] out: 12
// in: [-2, -4, 5, 7] out: -6
// Bonus Challenge
// Task: Modify the function to return the sum of even-indexed even numbers in the array.

function sumOfEvenNumbers(arr){
//check if array length is between 1 to 1000, else throw error
//loop thru each ele in array
  //if num is even 
    //add to sum
// return sum

if(!(arr.length>=1 && arr.length<=1000)) throw new Error("Input length is out of bounds");
let sum = arr.reduce((acc,val)=>{
  if(val%2===0)
     acc +=val;
  return acc;
},0)

return sum;
}
console.log("---sumOfEvenNumbers---")
console.log(sumOfEvenNumbers( [1, 2, 3, 4, 5, 6]));
console.log(sumOfEvenNumbers( [-2, -4, 5, 7]));

function sumOfEvenIndexes(arr){
  //check if array length is between 1 to 1000, else throw error
  //loop thru the array
    //if index is even
      //add value to sum
  //return sum

  if(!(arr.length>=1 && arr.length<=1000)) throw new Error("Input length is out of bounds");
  let sum= arr.reduce((acc,val,idx)=>{
    if(idx%2===0)
      acc+=val;
    return acc;
  },0)
 return sum;
}

console.log("---sumOfEvenIndexes---")
console.log(sumOfEvenIndexes([1, 2, 3, 4, 5, 6]))
console.log(sumOfEvenIndexes( [-2, -4, 5, 7]))