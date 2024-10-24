
// Name: PalindromeCheck
// Task: Given a string, write a function to check if it is a palindrome.
// Constraints: 1 <= string length <= 1000
// Output Format: Return 'Yes' if the string is a palindrome, otherwise 'No'.
// Sample Test Cases: in: 'racecar' out: 'Yes'
// in: 'hello' out: 'No'

// Bonus Challenge
// Task: Modify the function to check if the string can become a palindrome by removing at most one character.

function palindromeCheck(str){
//if str length is not within 1 to 1000, throw error
//if str len ==1, return yes
//if str len===2, check if both letters are same, 
    //yes return yes
    //else return No 
//check if first and last chars are equal
    //yes - slice str from 1 to n-1, call the function recursively

//return no

if(!(str.length >=1 && str.length<=1000)) throw new Error("Input length out of range");

if(str.length===1) return "Yes";
if(str.length===2){
  return str[0]===str[1]?"Yes":"No";
}
if(str[0]===str.slice(-1))
  return palindromeCheck(str.slice(1,-1));

return "No";
}
console.log("---palindrome check---")
console.log("in :racecar",palindromeCheck("racecar"))
console.log("in:hello",palindromeCheck("hello"))

function makeValidPalindrome(str){
  //if str length is not within 1 to 1000, throw error
//if str len ==1, return yes
//if str len===2, check if both letters are same, 
    //yes return yes
    //else return No 
//loop thru each char in string
//check if start and end chars are equal
    //yes - start++, end--
    //no
    //  if spliced, return false
    //check if i must be removed or j
      //if i+1 ===j 
        //remove i
        //set spliced
        //move j--
      //else if i===j-1
        //remove j
        //set spliced
        //i--
//return YEs

console.log("in:",str)
let length = str.length, letters=str.split(''),spliced=false;
if(!(length>=1 && length<=1000)) throw new Error ("Input length out of range")
  if(length===1) return "Yes";
if(length===2){
  return letters[0]===letters[1]?"Yes":"No";
}

for(let i=0,j=length-1;i<=j;){
  if(letters[i]===letters[j]){
    i++;
    j--;
  }else{
    if(spliced) return "No";
  
    //check if i must be removed or j
    if(letters[i+1]===letters[j]){
      letters.splice(i,1);
      spliced=true;
      j--;      
    }     
    else if(letters[i]===letters[j-1]){
      letters.splice(j,1);
      spliced=true;
      i--;
    }
  }
}
return "Yes";
}

console.log("---makeValidPalindrome---")
// console.log(makeValidPalindrome("kayijkiak"))
console.log(makeValidPalindrome("kayqiyiak"))
console.log(makeValidPalindrome("kayiak"))
console.log(makeValidPalindrome("kayyiak"))