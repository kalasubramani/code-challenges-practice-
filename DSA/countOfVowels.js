
function countOfVowelsRegEx(str){
  const matches =str.match(/[aeiou]/gi) ;

  return matches ? matches.length : 0;
}

console.log("countOfVowelsRegEx",countOfVowelsRegEx("hjkjee sdsfs uudfgffkfdjd"));


function countOfVowels(str){
  let count=0, vowelcheck = ['a','e','i','o','u'];

   for(let char of str.toLowerCase()){ //check if char is vowel
      if(vowelcheck.includes(char)){
        count++;
      }
   }

   return count;
}

console.log("countOfVowels" ,countOfVowels("hjkjee sdsfs uudfgffkfdjd"));