// Given two strings, find the number of common characters between them.

// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output
// [input] string s1
// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.
// [input] string s2
// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.
// [output] integer

function commonCharacterCount(s1, s2) {
  //check if length of strings is between 1 to 14 else throw "invalid input"
  //convert the strings to lowercase
  //find the string that is longer
  // s1chars ={}, s2chars={}, commonChars
  //iterate thru each char of longer string      
          //add s1chars[i] by 1
          //if s1chars[1] does not exists, add it to the obj and set count to 1
          //add s2chars[i] by 1
          //if s2chars[1] does not exists, add it to the obj and set count to 1
  //iterate thru  s1chars
      //check if the ele exists in s2chars
      //if ele exists check of the count is same
          //yes - add count to commonChars
          //no - add min count to commonChars
  
  if(!(s1.length >=1 && s1.length<15)) return "Invalid input";
  if(!(s2.length >=1 && s2.length<15)) return "Invalid input";
  
  let iterations = Math.max(s1.length,s2.length);        
  let s1chars={},s2chars={},commonChars=0;
  s1=s1.toLowerCase(),s2=s2.toLowerCase();
  for (let i=0;i<=iterations-1;i++){
      s1chars[s1[i]]=s1chars[s1[i]]?s1chars[s1[i]]+1:1;
      s2chars[s2[i]]=s2chars[s2[i]]?s2chars[s2[i]]+1:1;        
  }
  
  for(const key in s1chars){
      if(s2chars[key]){
          let count = Math.min(s1chars[key],s2chars[key])
          commonChars +=count;
      }
  }
  return commonChars;
}


console.log(commonCharacterCount("aabcc","adcaa"));//3
console.log(commonCharacterCount("a","b"));//0
console.log(commonCharacterCount("a","aaaa"));//1