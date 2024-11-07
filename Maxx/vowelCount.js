// New Challenge Time!
// Name: VowelCount
// Task: Count the number of vowels in a given string.
// Constraints: Input string length is between 1 and 10^4.
// Output Format: An integer representing the count of vowels.
// Sample Test Cases: in: "hello" out: 2
// in: "banana" out: 3
// Bonus Challenge
// Task: Count the number of vowels in a given string with support for Unicode characters.
// For example:
// in: "élève" out: 3


function vowelCount(str){
  //regEx for English vowels
  const vowelregEx=/[aeiou]/gi;
  const vowels = str.match(vowelregEx);
  return vowels?.length;
}

console.log("---vowelCount---")
console.log(vowelCount("hello"));//2
console.log(vowelCount("banana"));//3
console.log(vowelCount("élève"));//1

//bonus challenge
function vowelCountUnicode(str){ 
  //regEx for English and unicode vowels
  const vowelregEx  = /[aeiouáéíóúàèìòùäëïöü]/giu;
  const vowels = str.match(vowelregEx);
  return vowels?.length;
}
console.log("---vowelCountUnicode---")
console.log(vowelCountUnicode("hello"));//2
console.log(vowelCountUnicode("banana"));//3
console.log(vowelCountUnicode("élève"));//3