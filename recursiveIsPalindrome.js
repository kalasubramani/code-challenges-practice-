
// Write a recursive function called isPalindrome which returns true
//  if the string passed to it is a palindrome (reads the same forward and backward). 
//  Otherwise it returns false.

function recursiveIsPalindrome(str){
//compare using negative index i.e. from last index
// check if 0 and -1 are equal
//slice the string with remaining chars and recurse 

//exit cnd
if(str.length===1){
 return true;
}
if(str.length===2){
  return str[0]===str[1];
}

if(str[0]===str.slice(-1)){
  return recursiveIsPalindrome(str.slice(1,-1));
}

return false;
}

console.log(recursiveIsPalindrome("ada"));
console.log(recursiveIsPalindrome("adca"));