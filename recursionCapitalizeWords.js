// Write a recursive function called capitalizeWords.
//  Given an array of words, return a new array containing each word capitalized.

function recursionCapitalizeWords(arr){
  //check for arr.length===0,return
  // get first ele, capitalize it, add it to result
  //call recursive from arr ele 1

  if(arr.length===0) return [];

  let result = [];

  result.push(arr[0].toUpperCase());

  result = result.concat( recursionCapitalizeWords(arr.slice(1)) );
  return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(recursionCapitalizeWords(words));