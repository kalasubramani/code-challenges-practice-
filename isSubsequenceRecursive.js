// Write a function called isSubsequence which takes in two strings and checks whether the characters 
// in the first string form a subsequence of the characters in the second string. In other words, 
// the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequenceRecursive(str1,str2){

  //if str1 empty, return true
  //if str2 empty, return false
  // if first char matches in both strings, slice first char in both strings and recurse
  //if first chars does not match, keep str1, slice first char if str2 and recurse

  // isSubsequence('sing', 'sting'); // true
  if(!str1) return true;
  if(!str2) return false;

  if(str1[0]===str2[0]){
    return isSubsequenceRecursive(str1.slice(1),str2.slice(1));
  }
  //if chars does not match, slice only str2
  return isSubsequenceRecursive(str1,str2.slice(1));
}

console.log(isSubsequenceRecursive('hello', 'hello world'));
console.log(isSubsequenceRecursive('abc', 'acb'));
console.group( isSubsequenceRecursive('abc', 'abracadabra'));