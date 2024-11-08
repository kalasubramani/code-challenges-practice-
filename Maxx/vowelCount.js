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
  //check if str length is between 1 to 10^4, else throw error
  //define regular expression for vowels ignore case
  //match regex with str to find the matching vowels
  //find length of matching vowels
  //return length

  if(!(str.length>=1 && str.length<=Math.pow(10,5))) throw new Error("Input length out of bounds");
  //regEx for English vowels
  const vowelregEx=/[aeiou]/gi;
  const vowels = str.match(vowelregEx);
  return vowels?.length??0;
}

console.log("---vowelCount---")
console.log(vowelCount("hello"));//2
console.log(vowelCount("banana"));//3
console.log(vowelCount("élève"));//1
console.log(vowelCount("dryfry"));//0
// console.log(vowelCount(""));//Error

//bonus challenge
function vowelCountUnicode(str){ 
  //check if str length is between 1 to 10^4, else throw error
  //define regular expression for vowels along with Diacritic - ignore case
  //match regex with str to find the matching vowels
  //find length of matching vowels
  //return length

  if(!(str.length>=1 && str.length<=Math.pow(10,5))) throw new Error("Input length out of bounds");
  
  //regEx for English and unicode vowels
  const vowelregEx  = /[aeiouáéíóúàèìòùäëïöü]/giu;
  const vowels = str.match(vowelregEx);
  return vowels?.length??0;
}
console.log("---vowelCountUnicode---")
console.log(vowelCountUnicode("hello"));//2
console.log(vowelCountUnicode("banana"));//3
console.log(vowelCountUnicode("élève"));//3
console.log(vowelCount("dryfry"));//0
// console.log(vowelCount(""));//Error