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

function isSubsequence(str1,str2){

//two pointers
// set i = str1[0], j =str2[0]
//check every char in str2
//check if values of i===j 
// if yes, store the pos of j
  // move i++, set j=str2[pos]
//else j++ 

let i=0,j=0;
if(!str1) return true;
if(!str2) return false;

//'abc', 'abracadabra'
while(j<str2.length && i <=str1.length){
  if(str1[i]===str2[j]){
    i++;
  }
  if(i===str1.length) return true;  
  j++;
}
return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('abc', 'acb'));
console.group( isSubsequence('abc', 'abracadabra'));