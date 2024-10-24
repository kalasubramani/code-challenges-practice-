// Name: StringReversal
// Task: Given a string, write a function to reverse the string without using built-in reverse methods.
// Constraints: 1 <= string length <= 1000
// Output Format: Return the reversed string.
// Sample Test Cases: in: 'hello' out: 'olleh'
// in: 'Python' out: 'nohtyP'
// Bonus Challenge
// Task: Modify the function to reverse only the vowels in the string.

function stringReversal(str){
 //check if str length is between 1 to 1000, else throw error
 //split each char in str and store in array
 //use pointers i =0, j=end
 //loop until i<=j
  //swap i and j in array
// join the letters to form str and return
console.log("in:",str)
if(!(str.length>=1 && str.length<=1000)) throw new Error ("Input length out of range");
let letters=str.split('');
let i=0,j=str.length-1;
while(i<=j){
  [letters[i],letters[j]]=[letters[j],letters[i]];
  i++;
  j--;
}
return letters.join('');
}
console.log("---String reversal---")
console.log(stringReversal("hello"));
console.log(stringReversal("python"));


function reverseVowels(str){
  //check if str length is between 1 to 1000, else throw error
  //store vowels in array
  //split each char in str and store in array
  //use pointers i =0, j=end
  //loop until i<=j
    //check if i is a vowel
       //yes - check if j is a vowel
          //yes -swap i and j in array, move the pointers i++,j--
          //no - j--
      //no i++
 // join the letters to form str and return
 console.log("in:",str)
 
 if(!(str.length>=1 && str.length<=1000)) throw new Error ("Input length out of range");
 let letters=str.split(''), vowels=['a','e','i','o','u'];
 let i=0,j=str.length-1;
 while(i<=j){
   if(vowels.includes(letters[i]) ){
      if(vowels.includes(letters[j])){
        [letters[i],letters[j]]=[letters[j],letters[i]];
        i++;
        j--;
      }       
      else
         j--;
   }
    else 
   i++;
 
 }
 return letters.join('');
 }

 console.log("---Reverse vowels---")
 console.log(reverseVowels("hello"));
 console.log(reverseVowels("python"));
 console.log(reverseVowels("apeople"));