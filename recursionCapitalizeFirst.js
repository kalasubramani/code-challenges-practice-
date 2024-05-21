// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

function recursionCapitalizeFirst(arr) {

  //exit cond
  //take first ele, slice first char, capitalize it, concat it to the rest of the string
  //recurse slice array from first ele

  if (arr.length === 0) return [];

  let result = [];

  result.push(arr[0].slice(0, 1).toUpperCase().concat(arr[0].slice(1)));
  result = result.concat(recursionCapitalizeFirst(arr.slice(1)));

  return result;
}

console.log(recursionCapitalizeFirst(['car', 'taco', 'banana']));