// Write a function called findLongestSubstring, which accepts a string and 
// returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str){
  //use two pointers i,j and a set
  
  //ifj<str.length, 
      //check length of longest string, if len > longest string, replace longest string 
      //clear curr string
  //add j to a set
    //move j = j+1 
  //repeat until end of string
  //return curr string

  let i=0,j=0, currString = new Set(), longestSubString;

  while( j<str.length){
    if(currString.has(str[j])){ 
      longestSubString = longestSubString?Math.max(currString.size,longestSubString):currString.size;
      currString.clear();           
    }
    currString.add(str[j]); 
    j++;
  }
  // //to get len of last sub string
  longestSubString = Math.max(currString.size,longestSubString)
return longestSubString;
}

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisishowwedoit'));